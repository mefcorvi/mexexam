import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Cuáles son los símbolos patrios?',
  answer: 'La Bandera, el himno nacional y el escudo nacional',
  options: [
    'La bandera, la charrería y el catolicismo',
    'El himno nacional, la bandera y la virgen de Guadalupe',
    'Los tacos, el tequila y la charreria'
  ],
  type: 'choice',
  id: '0j0ah7',
  en: {
    question: 'What are the national symbols?',
    answer: 'The Flag, the national anthem, and the national coat of arms',
    options: [
      "The flag, charrería, and Catholicism",
      "The national anthem, the flag, and the Virgin of Guadalupe",
      "Tacos, tequila, and charrería"
    ]
  },
  ru: {
    question: 'Какие национальные символы?',
    answer: 'Флаг, гимн и герб',
    options: [
      'Флаг, чаррерия и католицизм',
      'Гимн, флаг и Дева Гвадалупе',
      'Такос, текила и чаррерия'
    ]
  },
  zh: {
    question: '国家的象征是什么？',
    answer: '国旗、国歌和国徽',
    options: [
      "国旗、马术和天主教",
      "国歌、国旗和瓜达卢佩圣母",
      "塔可、龙舌兰酒和马术"
    ]
  }
};
