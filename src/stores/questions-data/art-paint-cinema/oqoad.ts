import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Qué pintaba Jose María Velazco?',
  answer: 'Paisajes',
  options: ['Mujeres', 'Alegorías', 'Autoretratos'],
  type: 'choice',
  id: 'oqoad',
  en: {
    question: 'What did Jose María Velazco paint?',
    answer: 'Landscapes',
    options: [
      "Women",
      "Allegories",
      "Self-portraits"
    ]
  },
  ru: {
    question: 'Что рисовал Хосе Мария Веласко?',
    answer: 'Пейзажи',
    options: ['Женщин', 'Аллегории', 'Автопортреты']
  },
  zh: {
    question: '何塞·玛丽亚·贝拉斯科画了什么？',
    answer: '风景',
    options: [
      "女性",
      "寓言",
      "自画像"
    ]
  }
};
