import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Qué se celebra el 20 de noviembre?',
  answer: 'Día de la Revolución Mexicana',
  options: [
    'Dia de los Muertos',
    'Independencia de México',
    'Dia de la Bandera'
  ],
  type: 'choice',
  id: '0r04xt',
  ru: {
    question: 'Что отмечается 20 ноября?',
    answer: 'День Мексиканской революции',
    options: ['День мертвых', 'Независимость Мексики', 'День флага']
  },
  en: {
    question: 'What is celebrated on November 20?',
    answer: 'Mexican Revolution Day',
    options: [
      "Day of the Dead",
      "Independence of Mexico",
      "Flag Day"
    ]
  },
  zh: {
    question: '11月20日庆祝什么？',
    answer: '墨西哥革命日',
    options: [
      "亡灵节",
      "墨西哥独立日",
      "国旗日"
    ]
  }
};
