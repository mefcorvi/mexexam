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
  en: {
    question: 'Name of the old theater where the Palace of Fine Arts was built',
    answer: 'National Theater',
    options: [
      "Old Theater",
      "Theater of Mexico City",
      "Metropolitan Theater"
    ]
  },
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
