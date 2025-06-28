import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question:
    '¿Que presidente dijo “Tan lejos de Dios y tan cerca de Estados Unidos”?',
  answer: 'Porfirio Díaz',
  options: ['Vicente Fox', 'Benito Juárez', 'Francisco I. Madero'],
  type: 'choice',
  id: 'wlitd',
  en: {
    question: 'Which president said "So far from God and so close to the United States"?',
    answer: 'Porfirio Díaz',
    options: [
      "Vicente Fox",
      "Benito Juárez",
      "Francisco I. Madero"
    ]
  },
  ru: {
    question:
      'Какой президент сказал: «Так далеко от Бога и так близко к Соединенным Штатам»?',
    answer: 'Порфирио Диас',
    options: ['Висенте Фокс', 'Бенито Хуарес', 'Франсиско И. Мадеро']
  },
  zh: {
    question: '哪位总统说过“离上帝那么远，离美国那么近”？',
    answer: '波菲里奥·迪亚斯',
    options: [
      "文森特·福克斯",
      "本尼托·胡亚雷斯",
      "弗朗西斯科·I·马德罗"
    ]
  }
};
