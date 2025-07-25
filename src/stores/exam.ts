import { createSharedComposable } from '@vueuse/core';
import { computed, ref } from 'vue';
import {
  useQuestionsStore,
  type Question,
  type QuestionOption
} from './questions';
import { useStatisticsStore } from './statistics';

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

const EXAM_DURATION_MINUTES = 10;
const EXAM_DURATION_MS = EXAM_DURATION_MINUTES * 60 * 1000;

export const useExamStore = createSharedComposable(() => {
  const { questions, loadSections } = useQuestionsStore();
  const { recordCorrectAnswer, recordWrongAnswer, recordSessionStart } =
    useStatisticsStore();

  const examQuestions = ref<Question[]>([]);
  const randomizedOptions = ref<Map<string, QuestionOption[]>>(new Map());
  const userAnswers = ref<Map<string, number>>(new Map());
  const isExamStarted = ref(false);
  const isExamFinished = ref(false);
  const examResults = ref<ExamResult | null>(null);
  const examStartTime = ref<number | null>(null);
  const timeRemaining = ref<number>(EXAM_DURATION_MS);
  const timerInterval = ref<number | null>(null);
  const sectionId = ref<string | null>(null);

  const sectionQuestions = computed(() => {
    if (sectionId.value === null) {
      return [...questions.values()];
    }

    return [...questions.values()].filter(
      (x) => x.section.id === sectionId.value
    );
  });

  const choiceQuestions = computed(() => {
    const result: Question[] = [];
    for (const question of sectionQuestions.value) {
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

  const startTimer = () => {
    examStartTime.value = Date.now();
    timeRemaining.value = EXAM_DURATION_MS;

    timerInterval.value = window.setInterval(() => {
      if (examStartTime.value) {
        const elapsed = Date.now() - examStartTime.value;
        timeRemaining.value = Math.max(0, EXAM_DURATION_MS - elapsed);

        if (timeRemaining.value <= 0) {
          stopTimer();
          finishExam();
        }
      }
    }, 1000);
  };

  const stopTimer = () => {
    if (timerInterval.value) {
      clearInterval(timerInterval.value);
      timerInterval.value = null;
    }
  };

  const formatTime = (milliseconds: number): string => {
    const totalSeconds = Math.ceil(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const startExam = async (id?: string) => {
    await loadSections();

    sectionId.value = id ?? null;
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
    startTimer();

    // Record session start in global statistics
    recordSessionStart();
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

    stopTimer();

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
        // Record correct answer in global statistics
        recordCorrectAnswer(question.id);
      } else {
        wrongCount++;
        // Record wrong answer in global statistics
        recordWrongAnswer(question.id);
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
    stopTimer();
    examQuestions.value = [];
    randomizedOptions.value.clear();
    userAnswers.value.clear();
    isExamStarted.value = false;
    isExamFinished.value = false;
    examResults.value = null;
    examStartTime.value = null;
    timeRemaining.value = EXAM_DURATION_MS;
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

  const formattedTimeRemaining = computed(() => {
    return formatTime(timeRemaining.value);
  });

  const isTimeRunningOut = computed(() => {
    return timeRemaining.value <= 30000; // 30 seconds or less
  });

  return {
    examQuestions,
    userAnswers,
    isExamStarted,
    isExamFinished,
    examResults,
    timeRemaining,
    formattedTimeRemaining,
    isTimeRunningOut,
    startExam,
    selectAnswer,
    getSelectedAnswer,
    finishExam,
    resetExam,
    getRandomizedOptions,
    getQuestionById,
    getAnswerById,
    isAllQuestionsAnswered,
    answeredQuestionsCount,
    stopTimer
  };
});
