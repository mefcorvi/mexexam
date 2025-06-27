import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: 'Nombres de poetas mexicanos',
  answer:
    'Octavio Paz\nAmado Nervo\nJose Emilio Pacheco\nRosario Castellanos\nJaime Sabines',
  type: 'text',
  id: 'wef8u',
  en: {
    question: 'Names of Mexican poets',
    answer: 'Octavio Paz\n\
Amado Nervo\n\
Jose Emilio Pacheco\n\
Rosario Castellanos\n\
Jaime Sabines'
  },
  ru: {
    question: 'Имена мексиканских поэтов',
    answer:
      'Октавио Пас\nАмадо Нерво\nХосе Эмилио Пачеко\nРосарио Кастельянос\nХайме Сабинес'
  },
  tags: [
    {
      type: 'person',
      name: 'Octavio Paz'
    },
    {
      type: 'person',
      name: 'Amado Nervo'
    },
    {
      type: 'person',
      name: 'Jose Emilio Pacheco'
    },
    {
      type: 'person',
      name: 'Rosario Castellanos'
    },
    {
      type: 'person',
      name: 'Jaime Sabines'
    }
  ]
};
