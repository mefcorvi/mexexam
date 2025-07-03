import { markRaw, ref, shallowReactive } from 'vue';
import { createSharedComposable } from '@vueuse/core';
import { useTranslations } from './translations';
import { LoadingStatus } from '@/utils/loading-status';
import type { Package } from '@/utils/questions-schema';
import mexexamPackage from '../../data/mexexam.json';

const pkg = mexexamPackage as Package;

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
  loadingStatus: LoadingStatus;
};

export const useQuestionsStore = createSharedComposable(() => {
  const questions = shallowReactive(new Map<string, Question>());
  const sections = shallowReactive(new Map<string, QuestionsSection>());
  const isLoaded = ref(false);
  const translations = useTranslations();

  const loadSections = async () => {
    if (sections.size > 0) {
      return;
    }

    for (const sectionData of pkg.sections) {
      const section: QuestionsSection = {
        id: sectionData.id,
        title: sectionData.title.es ?? '',
        questions: [],
        loadingStatus: LoadingStatus.Loaded
      };

      for (const questionData of sectionData.questions) {
        const question: Question = {
          id: questionData.id,
          section,
          answer: questionData.answer.es ?? '',
          question: questionData.question.es ?? '',
          note: questionData.note.es ?? '',
          options: questionData.options?.map((x, idx) =>
            markRaw({
              id: idx,
              value: x.es ?? '',
              isAnswer: false
            })
          ),
          type: questionData.type === 'text' ? 'text' : 'choice'
        };

        for (const language of ['ru', 'en', 'zh'] as const) {
          translations.add(
            language,
            questionData.answer.es,
            questionData.answer[language]
          );
          translations.add(
            language,
            questionData.question.es,
            questionData.question[language]
          );
          translations.add(
            language,
            questionData.note.es,
            questionData.note[language]
          );

          for (const option of questionData.options) {
            translations.add(language, option.es, option[language]);
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

      sections.set(section.id, markRaw(section));

      for (const language of ['ru', 'en', 'zh'] as const) {
        translations.add(
          language,
          sectionData.title.es,
          sectionData.title[language]
        );
      }
    }

    isLoaded.value = true;
  };

  return {
    loadSections,
    isLoaded,
    questions,
    sections
  };
});
