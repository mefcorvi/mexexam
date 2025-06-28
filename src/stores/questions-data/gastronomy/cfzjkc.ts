import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Cuál es el ingrediente principal del mole?',
  answer: 'Chocolate amargo',
  options: ['Ajonjolí', 'Pimienta', 'Leche'],
  type: 'choice',
  id: 'cfzjkc',
  en: {
    question: 'What is the main ingredient of mole?',
    answer: 'Bitter chocolate',
    options: [
      "Sesame",
      "Pepper",
      "Milk"
    ]
  },
  ru: {
    question: 'Какой основной ингредиент у моле?',
    answer: 'Горький шоколад',
    options: ['Кунжут', 'Перец', 'Молоко']
  },
  zh: {
    question: '摩尔的主要成分是什么？',
    answer: '苦巧克力',
    options: [
      "芝麻",
      "胡椒",
      "牛奶"
    ]
  }
};
