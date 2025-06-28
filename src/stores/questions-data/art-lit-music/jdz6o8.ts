import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: 'Escribió sobre Francisco I. Madero',
  answer: 'Paco Ignacio Taibo II',
  options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
  type: 'choice',
  id: 'jdz6o8',
  en: {
    question: 'He wrote about Francisco I. Madero',
    answer: 'Paco Ignacio Taibo II',
    options: [
      "Octavio Paz",
      "Elena Poniatowska",
      "Carlos Fuentes"
    ]
  },
  ru: {
    question: 'Кто написал о Франсиско И. Мадеро?',
    answer: 'Пако Игнасио Тайбо II',
    options: ['Октавио Пас', 'Элена Понятовска', 'Карлос Фуэнтес']
  },
  tags: [
    {
      type: 'person',
      name: 'Paco Ignacio Taibo II'
    },
    {
      type: 'person',
      name: 'Francisco I. Madero'
    },
    {
      type: 'date',
      value: '2009'
    }
  ],
  zh: {
    question: '他写了关于弗朗西斯科·I·马德罗的文章',
    answer: '帕科·伊格纳西奥·泰博二世',
    options: [
      "奥克塔维奥·帕斯",
      "埃琳娜·波尼亚托夫斯卡",
      "卡洛斯·富恩特斯"
    ]
  }
};
