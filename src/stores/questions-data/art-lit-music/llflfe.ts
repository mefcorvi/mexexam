import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question:
    'Nombre del antiguo teatro donde se construyó el Palacio de Bellas Artes',
  answer: 'Teatro Nacional',
  options: [
    'Teatro antiguo',
    'Teatro de la Ciudad de México',
    'Teatro Metropolitano'
  ],
  type: 'choice',
  id: 'llflfe',
  ru: {
    question:
      'Название старого театра, на месте которого построен Дворец изящных искусств',
    answer: 'Национальный театр',
    options: ['Старый театр', 'Театр города Мехико', 'Метрополитенский театр']
  },
  tags: [
    {
      type: 'state',
      value: 'CDMX'
    }
  ]
};
