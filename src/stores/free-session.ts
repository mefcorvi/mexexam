import { createSharedComposable } from '@vueuse/core';
import { computed, markRaw, ref, watch } from 'vue';
import {
  useQuestionsStore,
  type Question,
  type QuestionOption
} from './questions';
import { useStoredSet } from '@/utils/stored-set';

export const useFreeSessionStore = createSharedComposable(() => {
  const correctQuestions = useStoredSet('correct-questions-2');
  const wrongQuestions = useStoredSet('wrong-questions-2');
  const {
    questions,
    loadAll: loadAllQuestions,
    loadSection
  } = useQuestionsStore();

  const currentQuestionId = ref<string>();

  const dontKnowOption: QuestionOption = markRaw({
    id: -1,
    value: "I don't know",
    isAnswer: false
  });

  const getRandomQuestionId = () => {
    let questionId = currentQuestionId.value;

    while (questionId === currentQuestionId.value) {
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
      throw new Error(
        `Failed to get question by id ${currentQuestionId.value}`
      );
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

  const correctCount = ref(0);
  const wrongCount = ref(0);

  const resetCount = () => {
    correctCount.value = 0;
    wrongCount.value = 0;
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
      correctCount.value++;
      correctQuestions.value.add(currentQuestion.value.id);
      wrongQuestions.value.delete(currentQuestion.value.id);
    } else {
      wrongCount.value++;
      wrongQuestions.value.add(currentQuestion.value.id);
      correctQuestions.value.delete(currentQuestion.value.id);
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
  };

  /**
   * Starts session with a specific section.
   */
  const startSection = async (sectionId: string) => {
    await loadSection(sectionId);
  };

  return {
    startAll,
    startSection,
    stat,
    correctCount,
    correctQuestions,
    wrongQuestions,
    currentOptionsRandomized,
    currentQuestion,
    isAnswerRevealed,
    selectedAnswer,
    wrongCount,
    getRandomQuestionId,
    resetCount,
    updateCounters,
    revealAnswer,
    selectAnswer,
    setQuestion,
    hasQuestion
  };
});

function selectRandomQuestionId(
  questions: Map<string, Question>,
  correct: Set<string>,
  wrong: Set<string>
): string | undefined {
  // if there are wrong questions, select one of them
  // each new wrong question cause a higher chance that wrong question
  // will be selected
  if (Math.random() < wrong.size / 10) {
    const keys = [...wrong];
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

  // if there are correct questions, select one of them
  // with a 20% chance
  if (Math.random() < 0.2) {
    const keys = [...correct];
    let key = '';

    while (keys.length > 0) {
      const idx = Math.floor(Math.random() * keys.length);
      key = keys[idx];

      if (questions.has(key)) {
        return key;
      } else {
        keys.splice(idx, 1);
        correct.delete(key);
      }
    }
  }

  // 40% chance to select a random question
  const keys = [...questions.keys()];
  return keys[Math.floor(Math.random() * keys.length)];
}
