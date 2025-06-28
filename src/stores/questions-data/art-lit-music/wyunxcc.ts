import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question:
    '¿Qué géneros escribían los siguientes autores: Juan Rulfo, Mario Bellatin y Jorge Volpi?',
  answer: 'Narrativa, novela',
  options: ['Dramático', 'Lírico', 'Didáctico'],
  type: 'choice',
  id: 'wyunxcc',
  en: {
    question: 'What genres did the following authors write: Juan Rulfo, Mario Bellatin, and Jorge Volpi?',
    answer: 'Narrative, novel',
    options: [
      "Dramatic",
      "Lyric",
      "Didactic"
    ]
  },
  ru: {
    question:
      'Какие жанры писали следующие авторы: Хуан Рульфо, Марио Беллатин и Хорхе Вольпи?',
    answer: 'Проза, роман',
    options: ['Драматический', 'Лирический', 'Дидактический']
  },
  tags: [
    {
      type: 'person',
      name: 'Juan Rulfo'
    },
    {
      type: 'person',
      name: 'Mario Bellatin'
    },
    {
      type: 'person',
      name: 'Jorge Volpi'
    }
  ],
  zh: {
    question: '以下作者：Juan Rulfo、Mario Bellatin 和 Jorge Volpi 写了什么类型的作品？',
    answer: '叙事，小说',
    options: [
      "戏剧",
      "抒情",
      "教学"
    ]
  }
};
