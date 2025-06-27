import type { QuestionData } from '../interfaces';

const modules = import.meta.glob('./art-paint-cinema/*.ts', { eager: true });

export const questions: QuestionData[] = Object.values(modules).map(
  (module) => (module as { question: QuestionData }).question
);
