import { markRaw, ref, shallowReactive } from 'vue';
import { loadSectionsData } from './sections';
import { createSharedComposable } from '@vueuse/core';
import { useTranslations } from './translations';
import { LoadingStatus, wrapLoading } from '@/utils/loading-status';

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
  loadingStatus: LoadingStatus;
  load: () => Promise<void>;
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

    const sectionsData = await loadSectionsData();

    for (const sectionData of sectionsData) {
      const section: QuestionsSection = {
        id: sectionData.id,
        title: sectionData.title,
        questions: [],
        image: sectionData.image,
        loadingStatus: LoadingStatus.Idle,
        load: wrapLoading(
          () => section,
          async () => {
            if (section.loadingStatus === LoadingStatus.Loaded) {
              return;
            }

            const questionsData = await sectionData.questions();

            for (const questionData of questionsData) {
              const question: Question = {
                id: questionData.id,
                section,
                answer: questionData.answer,
                question: questionData.question,
                note: questionData.note,
                noteImage:
                  'noteImage' in questionData
                    ? questionData.noteImage
                    : undefined,
                options: questionData.options?.map((x, idx) =>
                  markRaw({
                    id: idx,
                    value: x,
                    isAnswer: false
                  })
                ),
                type: questionData.type === 'text' ? 'text' : 'choice'
              };

              if (questionData.ru) {
                translations.add(
                  'ru',
                  questionData.answer,
                  questionData.ru.answer
                );
                translations.add(
                  'ru',
                  questionData.question,
                  questionData.ru.question
                );
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
              }

              if (questionData.en) {
                translations.add(
                  'en',
                  questionData.answer,
                  questionData.en.answer
                );
                translations.add(
                  'en',
                  questionData.question,
                  questionData.en.question
                );
                translations.add('en', questionData.note, questionData.en.note);

                if (questionData.en.options && questionData.options) {
                  for (let i = 0; i < questionData.en.options.length; i++) {
                    translations.add(
                      'en',
                      questionData.options[i],
                      questionData.en.options[i]
                    );
                  }
                }
              }

              if (questionData.zh) {
                translations.add(
                  'zh',
                  questionData.answer,
                  questionData.zh.answer
                );
                translations.add(
                  'zh',
                  questionData.question,
                  questionData.zh.question
                );
                translations.add('zh', questionData.note, questionData.zh.note);

                if (questionData.zh.options && questionData.options) {
                  for (let i = 0; i < questionData.zh.options.length; i++) {
                    translations.add(
                      'zh',
                      questionData.options[i],
                      questionData.zh.options[i]
                    );
                  }
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
        )
      };

      sections.set(section.id, markRaw(section));

      translations.add('ru', sectionData.title, sectionData.ru.title);
      translations.add('en', sectionData.title, sectionData.en.title);
      translations.add('zh', sectionData.title, sectionData.zh.title);
      isLoaded.value = true;
    }
  };

  const loadAll = async () => {
    await loadSections();
    await Promise.all([...sections.values()].map((x) => x.load()));
  };

  const loadSection = async (sectionId: string) => {
    await loadSections();
    const section = sections.get(sectionId);

    if (!section) {
      return;
    }

    await section.load();
  };

  const reset = () => {
    isLoaded.value = false;
    questions.clear();
  };

  return {
    loadAll,
    loadSection,
    loadSections,
    reset,
    isLoaded,
    questions,
    sections
  };
});
