import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question:
    'Temporada de zopilotes: Una historia narrativa de la Decena Trágica, ¿Quién es su autor?',
  answer: 'Paco Ignacio Taibo II',
  options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
  type: 'choice',
  id: '1r9cra',
  en: {
    question: 'Vulture Season: A Narrative Story of the Tragic Ten Days, who is its author?',
    answer: 'Paco Ignacio Taibo II',
    options: [
      "Octavio Paz",
      "Elena Poniatowska",
      "Carlos Fuentes"
    ]
  },
  ru: {
    question:
      'Сезон стервятников: Рассказ о Трагической десятке, кто его автор?',
    answer: 'Пако Игнасио Тайбо II',
    options: ['Октавио Пас', 'Элена Понятовска', 'Карлос Фуэнтес']
  },
  tags: [
    {
      type: 'person',
      name: 'Paco Ignacio Taibo II'
    },
    {
      type: 'date',
      value: '2009'
    },
    {
      type: 'event',
      value: 'Decena Trágica'
    }
  ],
  zh: {
    question: '秃鹰季节：一部关于悲惨十天的叙事故事，作者是谁？',
    answer: '帕科·伊格纳西奥·泰博二世',
    options: [
      "奥克塔维奥·帕斯",
      "埃莱娜·波尼亚托夫斯卡",
      "卡洛斯·富恩特斯"
    ]
  }
};
