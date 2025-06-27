import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: 'Famoso escritor mexicano de música para niños',
  answer: 'Francisco Gabilondo Soler, alias Cri Cri',
  options: [
    'Octavio Paz, alias Lagrimita',
    'Juan Rulfo, alias Cepillín',
    'Carlos Fuentes, alias Crin Crin'
  ],
  type: 'choice',
  id: '406sce',
  en: {
    question: 'Famous Mexican writer of children\'s music',
    answer: 'Francisco Gabilondo Soler, alias Cri Cri',
    options: [
      "Octavio Paz, alias Lagrimita",
      "Juan Rulfo, alias Cepillín",
      "Carlos Fuentes, alias Crin Crin"
    ]
  },
  ru: {
    question: 'Известный мексиканский автор детской музыки',
    answer: 'Франсиско Габилондо Солер, также известный как Кри Кри',
    options: [
      'Октавио Пас, также известный как Лагримита',
      'Хуан Рульфо, также известный как Сепильин',
      'Карлос Фуэнтес, также известный как Крин Крин'
    ]
  },
  tags: [
    {
      type: 'person',
      name: 'Francisco Gabilondo Soler'
    }
  ]
};
