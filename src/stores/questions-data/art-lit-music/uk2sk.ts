import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '"La muerte de Artemio Cruz" es una novela de',
  answer: 'Carlos Fuentes',
  options: ['Octavio Paz', 'Juan Rulfo', 'Elena Poniatowska'],
  type: 'choice',
  id: 'uk2sk',
  en: {
    question: '"The Death of Artemio Cruz" is a novel by',
    answer: 'Carlos Fuentes',
    options: [
      "Octavio Paz",
      "Juan Rulfo",
      "Elena Poniatowska"
    ]
  },
  ru: {
    question: '"Смерть Артемио Круса" это роман',
    answer: 'Карлоса Фуэнтеса',
    options: ['Октавио Паса', 'Хуана Рульфо', 'Элены Понятовски']
  },
  tags: [
    {
      type: 'person',
      name: 'Carlos Fuentes'
    },
    {
      type: 'date',
      value: '1962'
    }
  ],
  zh: {
    question: '《阿尔特米奥·克鲁斯之死》是一本小说，',
    answer: '卡洛斯·富恩特斯',
    options: [
      "奥克塔维奥·帕斯",
      "胡安·鲁尔福",
      "埃琳娜·波尼亚托夫斯卡"
    ]
  }
};
