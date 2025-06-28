import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Cuándo fue el apagón analógico en México?',
  answer: '31 de Diciembre de 2015',
  options: [
    '31 de Febrero de 2015',
    '31 de Julio de 2000',
    '31 de Octubre de 2018'
  ],
  type: 'choice',
  id: 'unwtc',
  en: {
    question: 'When was the analog blackout in Mexico?',
    answer: 'December 31, 2015',
    options: [
      "February 31, 2015",
      "July 31, 2000",
      "October 31, 2018"
    ]
  },
  ru: {
    question: 'Когда произошел аналоговый переход в Мексике?',
    answer: '31 декабря 2015 года',
    options: [
      '31 февраля 2015 года',
      '31 июля 2000 года',
      '31 октября 2018 года'
    ]
  },
  zh: {
    question: '墨西哥的模拟信号停播是什么时候？',
    answer: '2015年12月31日',
    options: [
      "2015年2月31日",
      "2000年7月31日",
      "2018年10月31日"
    ]
  }
};
