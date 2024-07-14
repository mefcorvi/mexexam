import type { QuestionsData, SectionData } from './questions/interfaces';

const modules = import.meta.glob('./questions/*.ts');

export const loadQuestionsData = async () => {
  const questions: QuestionsData = {
    sections: []
  };

  await Promise.all(Object.values(modules).map((x) => x()));

  for (const path in modules) {
    const module = await modules[path]();

    if (module && typeof module === 'object' && 'data' in module) {
      questions.sections.push(module.data as SectionData);
    }
  }

  console.dir(questions);

  return questions;
};
