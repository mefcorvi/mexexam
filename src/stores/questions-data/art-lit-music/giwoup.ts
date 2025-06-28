import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: 'Libro escrito por Francisco I. Madero',
  answer: 'La Sucesión Presidencial',
  note: 'Es un  libro donde Madero crítica al entonces presidente Porfirio Diaz después de un largo periodo de mandato de 34 años.',
  options: ['Primero sueño', 'El laberinto de la soledad', 'El Complot'],
  type: 'choice',
  id: 'giwoup',
  en: {
    question: 'Book written by Francisco I. Madero',
    answer: 'The Presidential Succession',
    options: [
      "First Dream",
      "The Labyrinth of Solitude",
      "The Conspiracy"
    ],
    note: 'It is a book where Madero criticizes the then-president Porfirio Diaz after a long term of 34 years.'
  },
  ru: {
    question: 'Книга, написанная Франсиско И. Мадеро',
    answer: 'Президентская преемственность',
    options: ['Первый сон', 'Лабиринт одиночества', 'Заговор'],
    note: 'Это книга, где Мадеро критикует тогдашнего президента Порфирио Диаса после его долгого 34-летнего правления.'
  },
  tags: [
    {
      type: 'person',
      name: 'Francisco I. Madero'
    },
    {
      type: 'date',
      value: '1908'
    }
  ],
  zh: {
    question: '由弗朗西斯科·I·马德罗撰写的书籍',
    answer: '总统继承',
    options: [
      "第一梦",
      "孤独的迷宫",
      "阴谋"
    ],
    note: '这是一本书，马德罗批评当时总统波费里奥·迪亚斯在长达34年的任期后。'
  }
};
