import { computed, markRaw, ref, watch } from 'vue';
import { loadQuestionsData } from './questions-data';
import { createSharedComposable, useStorage } from '@vueuse/core';

export type QuestionOption = {
  id: number;
  value: string;
  isAnswer: boolean;
};

export type Question = {
  id: string;
  section: QuestionsSection;
  type: 'choice' | 'text';
  question: string;
  answer: string;
  options?: QuestionOption[];
  note?: string;
  noteImage?: string;
};

export type QuestionsSection = {
  id: string;
  title: string;
  questions: Question[];
  image?: string;
};

export const useQuestionsStore = createSharedComposable(() => {
  const { questions, translations, load } = loadQuestions();

  const correctQuestions = useStoredSet('correct-questions');
  const wrongQuestions = useStoredSet('wrong-questions');

  const currentQuestionId = ref<string>();

  const dontKnowOption: QuestionOption = markRaw({
    id: -1,
    value: 'No se',
    isAnswer: false
  });

  translations.add('ru', 'No se', 'Не знаю');

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

  return {
    load,
    stat,
    correctCount,
    correctQuestions,
    wrongQuestions,
    currentOptionsRandomized,
    currentQuestion,
    isAnswerRevealed,
    selectedAnswer,
    translations,
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

function useStoredSet(key: string) {
  return useStorage(key, () => new Set<string>(), undefined, {
    serializer: {
      read(value) {
        return value ? new Set(value.split(',')) : new Set<string>();
      },
      write(value: Set<string>) {
        return [...value].join(',');
      }
    }
  });
}

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
    return keys[Math.floor(Math.random() * keys.length)];
  }

  // if there are correct questions, select one of them
  // with a 20% chance
  if (Math.random() < 0.2) {
    const keys = [...correct];
    return keys[Math.floor(Math.random() * keys.length)];
  }

  // 40% chance to select a random question
  const keys = [...questions.keys()];
  return keys[Math.floor(Math.random() * keys.length)];
}

function loadQuestions() {
  const questions = new Map<string, Question>();
  const sections = new Map<string, QuestionsSection>();
  const translations = useTranslations();

  const load = async () => {
    const questionsData = await loadQuestionsData();

    for (const sectionData of questionsData.sections) {
      const section: QuestionsSection = {
        id: sectionData.id,
        title: sectionData.title,
        questions: [],
        image: sectionData.image
      };

      sections.set(section.id, markRaw(section));

      translations.add('ru', sectionData.title, sectionData.ru.title);

      for (const questionData of sectionData.questions) {
        const question: Question = {
          id: questionData.id,
          section,
          answer: questionData.answer,
          question: questionData.question,
          note: questionData.note,
          noteImage:
            'noteImage' in questionData ? questionData.noteImage : undefined,
          options: questionData.options?.map((x, idx) =>
            markRaw({
              id: idx,
              value: x,
              isAnswer: false
            })
          ),
          type: questionData.type === 'text' ? 'text' : 'choice'
        };

        translations.add('ru', questionData.answer, questionData.ru.answer);
        translations.add('ru', questionData.question, questionData.ru.question);
        translations.add('ru', questionData.note, questionData.ru.note);

        if (questionData.ru.options && questionData.options) {
          for (let i = 0; i < questionData.ru.options.length; i++) {
            translations.add(
              'ru',
              questionData.options[i],
              questionData.ru.options[i]
            );
          }
        }

        if (question.type === 'choice' && question.options) {
          question.options.push(
            markRaw({
              id: question.options.length,
              isAnswer: true,
              value: question.answer
            })
          );
        }

        const q = markRaw(question);

        questions.set(question.id, q);
        section.questions.push(q);
      }
    }
  };

  return {
    load,
    sections,
    questions,
    translations
  };
}

const useTranslations = () => {
  const translations = new Map<string, string>();

  const add = (
    locale: string,
    key: string | null | undefined,
    value: string | null | undefined
  ) => {
    if (key && value) {
      translations.set(`$${locale}$${key}`, value);
    }
  };

  const t = (locale: string, key: string | null | undefined) => {
    if (!key) {
      return '';
    }

    return translations.get(`$${locale}$${key}`) ?? key;
  };

  return {
    add,
    t
  };
};
