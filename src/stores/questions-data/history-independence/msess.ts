import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Quién fué el primer presidente de México?',
  answer: 'Guadalupe Victoria',
  note: 'En 1824.',
  options: [
    'Jose María Bocanegra',
    'Anastacio Bustamante',
    'Vicente Guerrero'
  ],
  type: 'choice',
  id: 'msess',
  en: {
    question: 'Who was the first president of Mexico?',
    answer: 'Guadalupe Victoria',
    options: [
      "Jose María Bocanegra",
      "Anastacio Bustamante",
      "Vicente Guerrero"
    ],
    note: 'In 1824.'
  },
  ru: {
    question: 'Кто был первым президентом Мексики?',
    answer: 'Гвадалупе Виктория',
    options: [
      'Хосе Мария Боканегра',
      'Анастасио Бустаманте',
      'Висенте Герреро'
    ]
  }
};
