import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question:
    '¿Cuándo entró en vigor el tratado de libre comercio (TLC, NAFTA)?',
  answer: '01 de Enero de 1994',
  options: [
    '01 de Julio de 1990',
    '17 de Diciembre de 1982',
    '10 de Diciembre de 1992'
  ],
  type: 'choice',
  id: 'vto1q',
  en: {
    question: 'When did the North American Free Trade Agreement (NAFTA) come into effect?',
    answer: 'January 1, 1994',
    options: [
      "July 1, 1990",
      "December 17, 1982",
      "December 10, 1992"
    ]
  },
  ru: {
    question:
      'Когда вступил в силу договор о свободной торговле (TLC, NAFTA)?',
    answer: '1 января 1994 года',
    options: [
      '1 июля 1990 года',
      '17 декабря 1982 года',
      '10 декабря 1992 года'
    ]
  }
};
