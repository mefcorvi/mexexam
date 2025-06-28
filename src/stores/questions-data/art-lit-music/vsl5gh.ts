import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Que fué Juan Rulfo?',
  answer: 'Escritor',
  note: 'Reconocido como uno de los grandes maestros de la narrativa hispanoamericana del siglo XX.',
  options: ['Pintor', 'Muralista', 'Escultor'],
  type: 'choice',
  id: 'vsl5gh',
  en: {
    question: 'What was Juan Rulfo?',
    answer: 'Writer',
    options: [
      "Painter",
      "Muralist",
      "Sculptor"
    ],
    note: 'Recognized as one of the great masters of 20th-century Hispanic American narrative.'
  },
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
  ],
  zh: {
    question: '胡安·鲁尔福是什么？',
    answer: '作家',
    options: [
      "画家",
      "壁画家",
      "雕塑家"
    ],
    note: '被公认为20世纪西班牙美洲叙事文学的伟大大师之一。'
  }
};
