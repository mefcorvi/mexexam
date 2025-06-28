import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿En qué año se firmó la constitución que nos rige actualmente?',
  answer: '5 de Febrero de 1917 en Querétaro',
  options: [
    '7 de Marzo de 1917 en Jalisco',
    '12 de Diciembre en Ciudad de Mexico',
    '3 de Enero en Nuevo León'
  ],
  type: 'choice',
  id: '5aq09b',
  ru: {
    question:
      'В каком году была подписана конституция, которая нас сейчас регулирует?',
    answer: '5 февраля 1917 года в Керетаро',
    options: [
      '7 марта 1917 года в Халиско',
      '12 декабря в Мехико',
      '3 января в Нуэво-Леоне'
    ]
  },
  en: {
    question: 'In what year was the constitution that currently governs us signed?',
    answer: 'February 5, 1917 in Querétaro',
    options: [
      "March 7, 1917 in Jalisco",
      "December 12 in Mexico City",
      "January 3 in Nuevo León"
    ]
  },
  zh: {
    question: '我们现在遵循的宪法是哪一年签署的？',
    answer: '1917年2月5日在克雷塔罗',
    options: [
      "1917年3月7日在哈利斯科",
      "12月12日在墨西哥城",
      "1月3日在新莱昂"
    ]
  }
};
