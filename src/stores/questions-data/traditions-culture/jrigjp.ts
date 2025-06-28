import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: 'Famoso callejón de Guanajuato',
  answer: 'El callejón del beso',
  options: [
    'Callejón del infierno',
    'Callejon del perro muerto',
    'Callejon de las ánimas'
  ],
  type: 'choice',
  id: 'jrigjp',
  ru: {
    question: 'Знаменитый переулок в Гуанахуато',
    answer: 'Переулок поцелуя',
    options: ['Переулок ада', 'Переулок мертвой собаки', 'Переулок душ']
  },
  en: {
    question: 'Famous alley in Guanajuato',
    answer: 'The Alley of the Kiss',
    options: [
      "Alley of Hell",
      "Alley of the Dead Dog",
      "Alley of the Souls"
    ]
  },
  zh: {
    question: '著名的瓜纳华托小巷',
    answer: '吻之巷',
    options: [
      "地狱小巷",
      "死狗小巷",
      "灵魂小巷"
    ]
  }
};
