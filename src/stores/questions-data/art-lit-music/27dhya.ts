import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question:
    '¿Qué se inauguró durante el período presidencial de Abelardo Rodríguez Lujan?',
  answer: 'El Palacio de Bellas Artes',
  note: '29 de Septiembre de 1934.',
  options: ['El IMSS', 'La Diana Cazadora', 'La Estela de Luz'],
  type: 'choice',
  id: '27dhya',
  ru: {
    question:
      'Что было открыто в период президентства Абелардо Родригеса Лухана?',
    answer: 'Дворец изящных искусств',
    options: ['IMSS', 'Диана Охотница', 'Эстела де Лус'],
    note: '29 сентября 1934 года.'
  },
  tags: [
    {
      type: 'person',
      name: 'Abelardo Rodríguez Lujan'
    },
    {
      type: 'date',
      value: '1934-09-29'
    },
    {
      type: 'state',
      value: 'CDMX'
    }
  ]
};
