import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Qué significa papalote?',
  answer: 'Mariposa en Náhuatl',
  options: ['Papa', 'Papagayo', 'Jitomate'],
  type: 'choice',
  id: 'zalpk',
  ru: {
    question: 'Что означает папалоте?',
    answer: 'Бабочка на языке науатль',
    options: ['Картофель', 'Попугай', 'Помидор']
  },
  en: {
    question: 'What does papalote mean?',
    answer: 'Butterfly in Nahuatl',
    options: [
      "Papa",
      "Parrot",
      "Tomato"
    ]
  },
  zh: {
    question: 'papalote是什么意思？',
    answer: '在纳瓦特尔语中是“蝴蝶”的意思',
    options: [
      "Papa",
      "Papagayo",
      "Jitomate"
    ]
  }
};
