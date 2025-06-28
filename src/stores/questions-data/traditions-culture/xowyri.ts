import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿De dónde proviene el mariachi?',
  answer: 'Jalisco',
  options: ['Oaxaca', 'Zacatecas', 'Michoacán', 'Guanajuato'],
  type: 'choice',
  id: 'xowyri',
  ru: {
    question: 'Откуда происходит мариачи?',
    answer: 'Халиско',
    options: ['Оахака', 'Сакатекас', 'Мичоакан', 'Гуанахуато']
  },
  en: {
    question: 'Where does mariachi come from?',
    answer: 'Jalisco',
    options: [
      "Oaxaca",
      "Zacatecas",
      "Michoacán",
      "Guanajuato"
    ]
  },
  zh: {
    question: '玛丽亚奇起源于哪里？',
    answer: '哈利斯科',
    options: [
      "瓦哈卡",
      "萨卡特卡斯",
      "米却肯",
      "瓜纳华托"
    ]
  }
};
