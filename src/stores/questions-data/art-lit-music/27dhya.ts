import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question:
    '¿Qué se inauguró durante el período presidencial de Abelardo Rodríguez Lujan?',
  answer: 'El Palacio de Bellas Artes',
  note: '29 de Septiembre de 1934.',
  options: ['El IMSS', 'La Diana Cazadora', 'La Estela de Luz'],
  type: 'choice',
  id: '27dhya',
  en: {
    question: 'What was inaugurated during the presidential term of Abelardo Rodríguez Lujan?',
    answer: 'The Palace of Fine Arts',
    options: [
      "The IMSS",
      "The Diana the Hunter",
      "The Beacon of Light"
    ],
    note: 'September 29, 1934.'
  },
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
  ],
  zh: {
    question: '在阿贝拉多·罗德里格斯·卢汉总统任期内 inauguró 了什么？',
    answer: '美术宫',
    options: [
      "IMSS",
      "狩猎女神",
      "光之纪念碑"
    ],
    note: '1934年9月29日。'
  }
};
