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

  const { questions, loadSections } = useQuestionsStore();

  const sectionId = ref<string | null>(null);

  const sectionQuestions = computed(() => {
    if (sectionId.value) {
      const result = new Map<string, Question>();

      for (const question of questions.values()) {
        if (question.section.id === sectionId.value) {
          result.set(question.id, question);
        }
      }

      return result;
    }

    return questions;
  });

  const choiceQuestions = computed(() => {
    const result = new Map<string, Question>();

    for (const question of sectionQuestions.value.values()) {
      if (question.type === 'choice') {
        result.set(question.id, question);
      }
    }

    return result;
  });

  const currentQuestionId = ref<string>();

  const dontKnowOption: QuestionOption = markRaw({
    id: -1,
    value: "I don't know",
    isAnswer: false
  });

  const getRandomQuestionId = () => {
    let questionId = currentQuestionId.value;

    while (
      questionId === currentQuestionId.value &&
      choiceQuestions.value.size > 1
    ) {
      questionId = selectRandomQuestionId(
        choiceQuestions.value,
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

    const question = sectionQuestions.value.get(currentQuestionId.value);

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
    return sectionQuestions.value.has(id);
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

  /**
   * Marks the current question as correctly answered.
   */
  const markQuestionCorrect = () => {
    if (!currentQuestion.value) {
      return;
    }

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
  };

  /**
   * Marks the current question as incorrectly answered.
   */
  const markQuestionWrong = () => {
    if (!currentQuestion.value) {
      return;
    }

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
      choiceQuestions.value.size -
      correctQuestions.value.size -
      wrongQuestions.value.size,
    totalQuestions: choiceQuestions.value.size,
    correctPercentage:
      (correctQuestions.value.size / choiceQuestions.value.size) * 100,
    wrongPercentage:
      (wrongQuestions.value.size / choiceQuestions.value.size) * 100,
    unansweredPercentage:
      ((choiceQuestions.value.size -
        correctQuestions.value.size -
        wrongQuestions.value.size) /
        choiceQuestions.value.size) *
      100
  }));

  /**
   * Starts session with all questions.
   */
  const startAll = async () => {
    await loadSections();
    sectionId.value = null;

    // clear all counters
    correctQuestions.value.clear();
    wrongQuestions.value.clear();
  };

  /**
   * Starts session with a specific section.
   */
  const startSection = async (id: string) => {
    await loadSections();
    sectionId.value = id;

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
    hasQuestion,
    markQuestionCorrect,
    markQuestionWrong
  };
});

function selectRandomQuestionId(
  questions: Map<string, Question>,
  correct: Map<string, number>,
  wrong: Map<string, number>
): string | undefined {
  const keys = [...questions.keys()];
  const weights = keys.map((key) => {
    if (wrong.has(key)) {
      return 5;
    }

    if (correct.has(key)) {
      return 1 / (correct.get(key) || 1) ** 2;
    }

    return 10;
  });

  return randomByWeight(keys, weights);
}

export function randomByWeight(values: string[], weights: number[]): string {
  if (values.length !== weights.length) {
    throw new Error('Длины массивов values и weights должны совпадать.');
  }

  const n = values.length;
  if (n === 0) {
    throw new Error('Массив values не должен быть пустым.');
  }

  // Сумма весов
  const totalWeight = weights.reduce((sum, w) => sum + w, 0);
  if (totalWeight === 0) {
    throw new Error('Сумма весов не должна быть равна 0.');
  }

  // Нормированные вероятности, умноженные на n
  // p[i] = (weights[i] / totalWeight) * n
  const p: number[] = new Array(n);
  for (let i = 0; i < n; i++) {
    p[i] = (weights[i] / totalWeight) * n;
  }

  // Массив алиасов (индексы)
  const alias: number[] = new Array(n);

  // Две "стопки": малая (small) и большая (large)
  const small: number[] = [];
  const large: number[] = [];

  // Разделяем вероятности на две группы: < 1 и >= 1
  for (let i = 0; i < n; i++) {
    if (p[i] < 1) {
      small.push(i);
    } else {
      large.push(i);
    }
  }

  // Основной цикл алгоритма
  while (small.length > 0 && large.length > 0) {
    const l = small.pop() as number; // индекс с p[l] < 1
    const g = large.pop() as number; // индекс с p[g] >= 1

    alias[l] = g;
    p[g] = p[g] + p[l] - 1; // уменьшаем p[g]

    if (p[g] < 1) {
      small.push(g);
    } else {
      large.push(g);
    }
  }

  // Оставшиеся индексы (либо все в small, либо все в large) приводим к 1
  // чтобы они сами ссылались на себя
  while (small.length > 0) {
    p[small.pop() as number] = 1;
  }
  while (large.length > 0) {
    p[large.pop() as number] = 1;
  }

  // Выбираем случайный индекс из [0, n-1]
  const i = Math.floor(Math.random() * n);

  // Сравниваем дополнительным броском с p[i]
  if (Math.random() < p[i]) {
    return values[i];
  } else {
    return values[alias[i]];
  }
}
