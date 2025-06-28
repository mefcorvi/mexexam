import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Dónde se ubicaba la Calzada de los Muertos?',
  answer: 'En Teotihuacán',
  note: 'Era la avenida principal con 2 km de longitud.',
  options: ['En Chichén Itzá', 'En la Venta', 'En San Lorenzo'],
  type: 'choice',
  id: '1fbcyc',
  en: {
    question: 'Where was the Avenue of the Dead located?',
    answer: 'In Teotihuacán',
    options: [
      "In Chichén Itzá",
      "In La Venta",
      "In San Lorenzo"
    ],
    note: 'It was the main avenue with a length of 2 km.'
  },
  ru: {
    question: 'Где находилась Дорога мёртвых?',
    answer: 'В Теотиуакане',
    options: ['В Чичен-Ице', 'В Ла Венте', 'В Сан-Лоренсо'],
    note: 'Это был главный проспект длиной 2 км.'
  },
  zh: {
    question: '死者之路在哪里？',
    answer: '在特奥蒂瓦坎',
    options: [
      "在奇琴伊察",
      "在拉文塔",
      "在圣洛伦索"
    ],
    note: '它是主干道，长达2公里。'
  }
};
