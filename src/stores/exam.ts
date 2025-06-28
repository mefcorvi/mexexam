import { createSharedComposable } from '@vueuse/core';
import { computed, ref } from 'vue';
import {
  useQuestionsStore,
  type Question,
  type QuestionOption
} from './questions';

export type ExamAnswer = {
  questionId: string;
  selectedOptionId: number | null;
  isCorrect: boolean;
};

export type ExamResult = {
  correctAnswers: number;
  wrongAnswers: number;
  totalQuestions: number;
  percentage: number;
  answers: ExamAnswer[];
};

export const useExamStore = createSharedComposable(() => {
  const { questions, loadAll, loadSection } = useQuestionsStore();

  const examQuestions = ref<Question[]>([]);
  const randomizedOptions = ref<Map<string, QuestionOption[]>>(new Map());
  const userAnswers = ref<Map<string, number>>(new Map());
  const isExamStarted = ref(false);
  const isExamFinished = ref(false);
  const examResults = ref<ExamResult | null>(null);

  const choiceQuestions = computed(() => {
    const result: Question[] = [];
    for (const question of questions.values()) {
      if (question.type === 'choice') {
        result.push(question);
      }
    }
    return result;
  });

  const getRandomQuestions = (count: number = 10): Question[] => {
    const availableQuestions = [...choiceQuestions.value];
    const selectedQuestions: Question[] = [];

    for (let i = 0; i < Math.min(count, availableQuestions.length); i++) {
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      selectedQuestions.push(availableQuestions[randomIndex]);
      availableQuestions.splice(randomIndex, 1);
    }

    return selectedQuestions;
  };

  const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startExam = async (sectionId?: string) => {
    if (sectionId) {
      await loadSection(sectionId);
    } else {
      await loadAll();
    }

    examQuestions.value = getRandomQuestions(10);
    randomizedOptions.value.clear();

    // Randomize options for each question once
    for (const question of examQuestions.value) {
      if (question.options) {
        randomizedOptions.value.set(
          question.id,
          shuffleArray(question.options)
        );
      }
    }

    userAnswers.value.clear();
    isExamStarted.value = true;
    isExamFinished.value = false;
    examResults.value = null;
  };

  const selectAnswer = (questionId: string, optionId: number) => {
    if (isExamFinished.value) return;

    userAnswers.value.set(questionId, optionId);
  };

  const getSelectedAnswer = (questionId: string): number | null => {
    return userAnswers.value.get(questionId) ?? null;
  };

  const finishExam = () => {
    if (isExamFinished.value) return;

    const answers: ExamAnswer[] = [];
    let correctCount = 0;
    let wrongCount = 0;

    for (const question of examQuestions.value) {
      const selectedOptionId = userAnswers.value.get(question.id);
      const selectedOption = question.options?.find(
        (opt) => opt.id === selectedOptionId
      );
      const isCorrect = selectedOption?.isAnswer ?? false;

      answers.push({
        questionId: question.id,
        selectedOptionId: selectedOptionId ?? null,
        isCorrect
      });

      if (isCorrect) {
        correctCount++;
      } else {
        wrongCount++;
      }
    }

    examResults.value = {
      correctAnswers: correctCount,
      wrongAnswers: wrongCount,
      totalQuestions: examQuestions.value.length,
      percentage: Math.round((correctCount / examQuestions.value.length) * 100),
      answers
    };

    isExamFinished.value = true;
  };

  const resetExam = () => {
    examQuestions.value = [];
    randomizedOptions.value.clear();
    userAnswers.value.clear();
    isExamStarted.value = false;
    isExamFinished.value = false;
    examResults.value = null;
  };

  const getRandomizedOptions = (question: Question): QuestionOption[] => {
    return randomizedOptions.value.get(question.id) ?? [];
  };

  const getQuestionById = (questionId: string): Question | undefined => {
    return examQuestions.value.find((q) => q.id === questionId);
  };

  const getAnswerById = (questionId: string): ExamAnswer | undefined => {
    return examResults.value?.answers.find((a) => a.questionId === questionId);
  };

  const isAllQuestionsAnswered = computed(() => {
    return (
      examQuestions.value.length > 0 &&
      userAnswers.value.size === examQuestions.value.length
    );
  });

  const answeredQuestionsCount = computed(() => {
    return userAnswers.value.size;
  });

  return {
    examQuestions,
    userAnswers,
    isExamStarted,
    isExamFinished,
    examResults,
    startExam,
    selectAnswer,
    getSelectedAnswer,
    finishExam,
    resetExam,
    getRandomizedOptions,
    getQuestionById,
    getAnswerById,
    isAllQuestionsAnswered,
    answeredQuestionsCount
  };
});
