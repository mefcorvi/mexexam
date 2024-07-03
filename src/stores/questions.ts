import { computed, markRaw, ref, watch } from 'vue';
import questionsData from './questions.json';
import { createSharedComposable } from '@vueuse/core';

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
};

export type QuestionsSection = {
  id: string;
  title: string;
  questions: Question[];
};

export const useQuestionsStore = createSharedComposable(() => {
  const { questions, translations } = loadQuestions();

  const getRandomQuestionId = () => {
    return selectRandomQuestionId(questions);
  };

  const currentQuestionId = ref(getRandomQuestionId());

  const currentQuestion = computed(() => {
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
    currentOptionsRandomized.value = (
      currentQuestion.value?.options ?? []
    ).sort(() => Math.random() - 0.5);
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

    if (selectedAnswer.value.isAnswer) {
      correctCount.value++;
    } else {
      wrongCount.value++;
    }
  };

  const revealAnswer = () => {
    if (currentQuestion.value.type !== 'text') {
      return;
    }

    isAnswerRevealed.value = true;
  };

  watch(
    () => currentQuestion.value.id,
    () => {
      selectedAnswer.value = undefined;
      isAnswerRevealed.value = false;
      randomizeOptions();
    },
    { immediate: true, flush: 'sync' }
  );

  return {
    correctCount,
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

function selectRandomQuestionId(questions: Map<string, Question>) {
  const keys = [...questions.keys()];
  return keys[Math.floor(Math.random() * keys.length)];
}

function loadQuestions() {
  const questions = new Map<string, Question>();
  const sections = new Map<string, QuestionsSection>();
  const translations = useTranslations();

  for (const sectionData of questionsData.sections) {
    const section: QuestionsSection = {
      id: sectionData.id,
      title: sectionData.title,
      questions: []
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

  return {
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
