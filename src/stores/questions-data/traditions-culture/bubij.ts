import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿De dónde es la Guelaguetza?',
  answer: 'Oaxaca',
  options: ['Chihuahua', 'Coahuila', 'Nuevo León'],
  type: 'choice',
  id: 'bubij',
  ru: {
    question: 'Откуда Гуэлагетца?',
    answer: 'Оахака',
    options: ['Чиуауа', 'Коауила', 'Нуэво-Леон']
  },
  en: {
    question: 'Where is the Guelaguetza from?',
    answer: 'Oaxaca',
    options: [
      "Chihuahua",
      "Coahuila",
      "Nuevo León"
    ]
  },
  zh: {
    question: 'Guelaguetza 是哪里来的？',
    answer: '瓦哈卡',
    options: [
      "奇瓦瓦",
      "科阿韦拉",
      "新莱昂"
    ]
  }
};
