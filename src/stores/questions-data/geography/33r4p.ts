import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Con qué países tiene frontera México?',
  answer: 'Estados Unidos, Guatemala y Belice',
  options: [
    'Estados Unidos y Guatemala',
    'Estados Unidos y Belice',
    'Estados Unidos'
  ],
  type: 'choice',
  id: '33r4p',
  en: {
    question: 'Which countries border Mexico?',
    answer: 'United States, Guatemala, and Belize',
    options: [
      "United States and Guatemala",
      "United States and Belize",
      "United States"
    ]
  },
  ru: {
    question: 'С какими странами граничит Мексика?',
    answer: 'США, Гватемала и Белиз',
    options: ['США и Гватемала', 'США и Белиз', 'США']
  },
  zh: {
    question: '墨西哥与哪些国家接壤？',
    answer: '美国、危地马拉和伯利兹',
    options: [
      "美国和危地马拉",
      "美国和伯利兹",
      "美国"
    ]
  }
};
