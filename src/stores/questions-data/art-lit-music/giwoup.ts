import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: 'Libro escrito por Francisco I. Madero',
  answer: 'La Sucesión Presidencial',
  note: 'Es un  libro donde Madero crítica al entonces presidente Porfirio Diaz después de un largo periodo de mandato de 34 años.',
  options: ['Primero sueño', 'El laberinto de la soledad', 'El Complot'],
  type: 'choice',
  id: 'giwoup',
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
  ]
};
