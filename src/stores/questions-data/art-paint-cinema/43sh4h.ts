import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Cuál fué la primera película sonora en México?',
  answer: 'Santa',
  note: 'Grabada en 1931 y estrenada en 1932.',
  options: ['Vámonos', 'El presidente de la república', 'La lucha'],
  type: 'choice',
  id: '43sh4h',
  en: {
    question: 'What was the first sound film in Mexico?',
    answer: 'Santa',
    options: [
      "Vámonos",
      "The President of the Republic",
      "The Fight"
    ],
    note: 'Recorded in 1931 and released in 1932.'
  },
  ru: {
    question: 'Какой был первый звуковой фильм в Мексике?',
    answer: 'Санта',
    options: ['Вамонес', 'Президент Республики', 'Борьба'],
    note: 'Записана в 1931 году и выпущена в 1932 году.'
  }
};
