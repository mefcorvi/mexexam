import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿En qué batalla participó el "Escuadrón 201"?',
  answer: 'Segunda Guerra Mundial',
  options: [
    'Primera Guerra Mundial',
    'Guerra contra EEUU',
    'La Guerra de Independencia'
  ],
  type: 'choice',
  id: 'l08ps',
  en: {
    question: 'In which battle did the "Escuadrón 201" participate?',
    answer: 'World War II',
    options: [
      "World War I",
      "War against the USA",
      "The War of Independence"
    ]
  },
  ru: {
    question: 'В какой битве участвовала "Эскадрилья 201"?',
    answer: 'Вторая мировая война',
    options: [
      'Первая мировая война',
      'Война против США',
      'Война за независимость'
    ]
  },
  zh: {
    question: '"201中队"参与了哪场战斗？',
    answer: '第二次世界大战',
    options: [
      "第一次世界大战",
      "对美国的战争",
      "独立战争"
    ]
  }
};
