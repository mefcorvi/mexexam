import { createSharedComposable } from '@vueuse/core';
import { computed, ref, watch } from 'vue';
import { useStorage } from '@vueuse/core';

export interface QuestionStatistics {
  correctCount: number;
  wrongCount: number;
  lastAnswered?: number; // timestamp
}

export interface GlobalStatistics {
  questions: Record<string, QuestionStatistics>;
  totalSessions: number;
  lastReset?: number; // timestamp
}

const defaultStatistics: GlobalStatistics = {
  questions: {},
  totalSessions: 0
};

export const useStatisticsStore = createSharedComposable(() => {
  const statistics = useStorage<GlobalStatistics>(
    'globalStatistics',
    defaultStatistics
  );

  const getQuestionStats = (questionId: string): QuestionStatistics => {
    return (
      statistics.value.questions[questionId] || {
        correctCount: 0,
        wrongCount: 0
      }
    );
  };

  const recordCorrectAnswer = (questionId: string) => {
    if (!statistics.value.questions[questionId]) {
      statistics.value.questions[questionId] = {
        correctCount: 0,
        wrongCount: 0
      };
    }

    statistics.value.questions[questionId].correctCount++;
    statistics.value.questions[questionId].lastAnswered = Date.now();
  };

  const recordWrongAnswer = (questionId: string) => {
    if (!statistics.value.questions[questionId]) {
      statistics.value.questions[questionId] = {
        correctCount: 0,
        wrongCount: 0
      };
    }

    statistics.value.questions[questionId].wrongCount++;
    statistics.value.questions[questionId].lastAnswered = Date.now();
  };

  const recordSessionStart = () => {
    statistics.value.totalSessions++;
  };

  const resetStatistics = () => {
    statistics.value = {
      questions: {},
      totalSessions: 0,
      lastReset: Date.now()
    };
  };

  const getQuestionAccuracy = (questionId: string): number => {
    const stats = getQuestionStats(questionId);
    const total = stats.correctCount + stats.wrongCount;
    return total > 0 ? (stats.correctCount / total) * 100 : 0;
  };

  const getQuestionDifficulty = (
    questionId: string
  ): 'easy' | 'medium' | 'hard' => {
    const accuracy = getQuestionAccuracy(questionId);
    if (accuracy >= 80) return 'easy';
    if (accuracy >= 50) return 'medium';
    return 'hard';
  };

  const getGlobalStats = computed(() => {
    const questionIds = Object.keys(statistics.value.questions);
    const totalQuestions = questionIds.length;

    if (totalQuestions === 0) {
      return {
        totalQuestions: 0,
        totalCorrect: 0,
        totalWrong: 0,
        averageAccuracy: 0,
        easyQuestions: 0,
        mediumQuestions: 0,
        hardQuestions: 0
      };
    }

    let totalCorrect = 0;
    let totalWrong = 0;
    let easyQuestions = 0;
    let mediumQuestions = 0;
    let hardQuestions = 0;

    questionIds.forEach((questionId) => {
      const stats = getQuestionStats(questionId);
      totalCorrect += stats.correctCount;
      totalWrong += stats.wrongCount;

      const difficulty = getQuestionDifficulty(questionId);
      switch (difficulty) {
        case 'easy':
          easyQuestions++;
          break;
        case 'medium':
          mediumQuestions++;
          break;
        case 'hard':
          hardQuestions++;
          break;
      }
    });

    const totalAnswers = totalCorrect + totalWrong;
    const averageAccuracy =
      totalAnswers > 0 ? (totalCorrect / totalAnswers) * 100 : 0;

    return {
      totalQuestions,
      totalCorrect,
      totalWrong,
      averageAccuracy,
      easyQuestions,
      mediumQuestions,
      hardQuestions
    };
  });

  const getQuestionsByDifficulty = computed(() => {
    const easy: string[] = [];
    const medium: string[] = [];
    const hard: string[] = [];

    Object.keys(statistics.value.questions).forEach((questionId) => {
      const difficulty = getQuestionDifficulty(questionId);
      switch (difficulty) {
        case 'easy':
          easy.push(questionId);
          break;
        case 'medium':
          medium.push(questionId);
          break;
        case 'hard':
          hard.push(questionId);
          break;
      }
    });

    return { easy, medium, hard };
  });

  return {
    statistics: computed(() => statistics.value),
    getQuestionStats,
    recordCorrectAnswer,
    recordWrongAnswer,
    recordSessionStart,
    resetStatistics,
    getQuestionAccuracy,
    getQuestionDifficulty,
    getGlobalStats,
    getQuestionsByDifficulty
  };
});
