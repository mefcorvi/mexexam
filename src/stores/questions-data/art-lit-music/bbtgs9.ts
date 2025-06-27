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
  ]
};
