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
  ]
};
