import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question:
    '¿Qué géneros escribían los siguientes autores: Juan Rulfo, Mario Bellatin y Jorge Volpi?',
  answer: 'Narrativa, novela',
  options: ['Dramático', 'Lírico', 'Didáctico'],
  type: 'choice',
  id: 'wyunxcc',
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
  ]
};
