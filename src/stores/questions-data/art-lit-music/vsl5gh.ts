import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Que fué Juan Rulfo?',
  answer: 'Escritor',
  note: 'Reconocido como uno de los grandes maestros de la narrativa hispanoamericana del siglo XX.',
  options: ['Pintor', 'Muralista', 'Escultor'],
  type: 'choice',
  id: 'vsl5gh',
  ru: {
    question: 'Кем был Хуан Рульфо?',
    answer: 'Писатель',
    options: ['Художник', 'Муралист', 'Скульптор'],
    note: 'Признан одним из великих мастеров латиноамериканской прозы XX века.'
  },
  tags: [
    {
      type: 'person',
      name: 'Juan Rulfo'
    },
    {
      type: 'date',
      value: '1917-05-16'
    },
    {
      type: 'date',
      value: '1986-01-07'
    },
    {
      type: 'state',
      value: 'Jalisco'
    }
  ]
};
