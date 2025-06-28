import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: 'El arpa es un instrumento musical de',
  answer: 'Veracruz',
  options: ['Guanajuato', 'Campeche', 'Yucatán'],
  type: 'choice',
  id: 'bbtgs9',
  en: {
    question: 'The harp is a musical instrument from',
    answer: 'Veracruz',
    options: [
      "Guanajuato",
      "Campeche",
      "Yucatán"
    ]
  },
  ru: {
    question: 'Арфа это музыкальный инструмент из',
    answer: 'Веракрус',
    options: ['Гуанахуато', 'Кампече', 'Юкатан']
  },
  tags: [
    {
      type: 'state',
      value: 'Veracruz'
    }
  ],
  zh: {
    question: '竖琴是一种乐器，来自于',
    answer: '维拉克鲁斯',
    options: [
      "瓜纳华托",
      "坎佩切",
      "尤卡坦"
    ]
  }
};
