import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿A qué se le llama fonda?',
  answer: 'A un pequeño restaurante económico',
  options: ['A un hostal', 'A un carro pequeño', 'A un barrio popular'],
  type: 'choice',
  id: 'j34dgo',
  ru: {
    question: 'Что называют фондой?',
    answer: 'Маленький экономичный ресторан',
    options: ['Хостел', 'Маленькая машина', 'Популярный район']
  },
  en: {
    question: 'What is a fonda?',
    answer: 'A small budget restaurant',
    options: [
      "A hostel",
      "A small car",
      "A popular neighborhood"
    ]
  },
  zh: {
    question: '什么叫做fondas？',
    answer: '指的是一家小型经济餐厅',
    options: [
      "一家旅馆",
      "一辆小车",
      "一个受欢迎的社区"
    ]
  }
};
