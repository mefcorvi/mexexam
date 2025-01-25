import { createSharedComposable } from '@vueuse/core';
import { computed, markRaw, ref, watch } from 'vue';
import {
  useQuestionsStore,
  type Question,
  type QuestionOption
} from './questions';

export const useFreeSessionStore = createSharedComposable(() => {
  const correctQuestions = ref(new Map<string, number>());
  const wrongQuestions = ref(new Map<string, number>());

  const {
    questions,
    loadAll: loadAllQuestions,
    loadSection,
    reset: resetQuestions
  } = useQuestionsStore();

  const currentQuestionId = ref<string>();

  const dontKnowOption: QuestionOption = markRaw({
    id: -1,
    value: "I don't know",
    isAnswer: false
  });

  const getRandomQuestionId = () => {
    let questionId = currentQuestionId.value;

    while (questionId === currentQuestionId.value && questions.size > 1) {
      questionId = selectRandomQuestionId(
        questions,
        correctQuestions.value,
        wrongQuestions.value
      );

      if (!questionId) {
        return questionId;
      }
    }

    return questionId;
  };

  const currentQuestion = computed(() => {
    if (!currentQuestionId.value) {
      return null;
    }

    const question = questions.get(currentQuestionId.value);

    if (!question) {
      return null;
    }

    return question;
  });

  const currentOptionsRandomized = ref<QuestionOption[]>([]);

  const randomizeOptions = () => {
    currentOptionsRandomized.value = [
      ...(currentQuestion.value?.options ?? []).sort(() => Math.random() - 0.5),
      dontKnowOption
    ];
  };

  const selectedAnswer = ref<QuestionOption>();
  const isAnswerRevealed = ref(false);

  const setQuestion = (id: string) => {
    currentQuestionId.value = id;
  };

  const hasQuestion = (id: string) => {
    return questions.has(id);
  };

  const selectAnswer = (option: QuestionOption) => {
    if (!currentQuestion.value) {
      return;
    }

    // only for choice types
    if (currentQuestion.value.type !== 'choice') {
      return;
    }

    if (!currentOptionsRandomized.value.includes(option)) {
      throw new Error(`Current question does not have the selected option`);
    }

    selectedAnswer.value = option;
  };

  const updateCounters = () => {
    if (!selectedAnswer.value) {
      return;
    }

    if (!currentQuestion.value) {
      return;
    }

    if (selectedAnswer.value.isAnswer) {
      // increase the count of correct answers for this question
      correctQuestions.value.set(
        currentQuestion.value.id,
        (correctQuestions.value.get(currentQuestion.value.id) ?? 0) + 1
      );

      // decrease the count of wrong answers for this question
      wrongQuestions.value.set(
        currentQuestion.value.id,
        (wrongQuestions.value.get(currentQuestion.value.id) ?? 0) - 1
      );

      // if wrong count is negative, remove the question from wrong questions
      if ((wrongQuestions.value.get(currentQuestion.value.id) ?? 0) <= 0) {
        wrongQuestions.value.delete(currentQuestion.value.id);
      }
    } else {
      // increase the count of wrong answers for this question
      wrongQuestions.value.set(
        currentQuestion.value.id,
        (wrongQuestions.value.get(currentQuestion.value.id) ?? 0) + 1
      );

      // decrease the count of correct answers for this question
      correctQuestions.value.set(
        currentQuestion.value.id,
        (correctQuestions.value.get(currentQuestion.value.id) ?? 0) - 1
      );

      // if correct count is negative, remove the question from correct questions
      if ((correctQuestions.value.get(currentQuestion.value.id) ?? 0) <= 0) {
        correctQuestions.value.delete(currentQuestion.value.id);
      }
    }
  };

  const revealAnswer = () => {
    if (!currentQuestion.value) {
      return;
    }

    if (currentQuestion.value.type !== 'text') {
      return;
    }

    isAnswerRevealed.value = true;
  };

  watch(
    () => currentQuestion.value?.id,
    () => {
      selectedAnswer.value = undefined;
      isAnswerRevealed.value = false;
      randomizeOptions();
    },
    { immediate: true, flush: 'sync' }
  );

  const stat = computed(() => ({
    correctQuestions: correctQuestions.value.size,
    wrongQuestions: wrongQuestions.value.size,
    unansweredQuestions:
      questions.size - correctQuestions.value.size - wrongQuestions.value.size,
    totalQuestions: questions.size,
    correctPercentage: (correctQuestions.value.size / questions.size) * 100,
    wrongPercentage: (wrongQuestions.value.size / questions.size) * 100,
    unansweredPercentage:
      ((questions.size -
        correctQuestions.value.size -
        wrongQuestions.value.size) /
        questions.size) *
      100
  }));

  /**
   * Starts session with all questions.
   */
  const startAll = async () => {
    await loadAllQuestions();

    // clear all counters
    correctQuestions.value.clear();
    wrongQuestions.value.clear();
  };

  /**
   * Starts session with a specific section.
   */
  const startSection = async (sectionId: string) => {
    resetQuestions();
    await loadSection(sectionId);

    // clear all counters
    correctQuestions.value.clear();
    wrongQuestions.value.clear();
  };

  return {
    startAll,
    startSection,
    stat,
    correctCount: computed(() => correctQuestions.value),
    correctQuestions,
    wrongQuestions,
    currentOptionsRandomized,
    currentQuestion,
    isAnswerRevealed,
    selectedAnswer,
    wrongCount: computed(() => wrongQuestions.value.size),
    getRandomQuestionId,
    updateCounters,
    revealAnswer,
    selectAnswer,
    setQuestion,
    hasQuestion
  };
});

function selectRandomQuestionId(
  questions: Map<string, Question>,
  correct: Map<string, number>,
  wrong: Map<string, number>
): string | undefined {
  // if there are wrong questions, select one of them
  // each new wrong question cause a higher chance that wrong question
  // will be selected
  if (Math.random() < wrong.size / 10) {
    const keys = [...wrong.keys()];
    let key = '';

    while (keys.length > 0) {
      const idx = Math.floor(Math.random() * keys.length);
      key = keys[idx];

      if (questions.has(key)) {
        return key;
      } else {
        keys.splice(idx, 1);
        wrong.delete(key);
      }
    }
  }

  // get list of correct questions with a most answers count
  const correctMax = Math.max(...correct.values());
  const topCorrectQuestions = new Set<string>();

  for (const [key, count] of correct) {
    if (count === correctMax) {
      topCorrectQuestions.add(key);
    }
  }

  // if all questions are correct, clear the list
  // so we won't get stuck in an infinite loop
  if (topCorrectQuestions.size === correct.size) {
    topCorrectQuestions.clear();
  }

  let result = '';
  const keys = [...questions.keys()];

  while (!result) {
    const key = keys[Math.floor(Math.random() * keys.length)];

    if (topCorrectQuestions.has(key)) {
      continue;
    }

    result = key;
  }

  return result;
}
