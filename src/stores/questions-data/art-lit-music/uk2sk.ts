import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '"La muerte de Artemio Cruz" es una novela de',
  answer: 'Carlos Fuentes',
  options: ['Octavio Paz', 'Juan Rulfo', 'Elena Poniatowska'],
  type: 'choice',
  id: 'uk2sk',
  ru: {
    question: '"Смерть Артемио Круса" это роман',
    answer: 'Карлоса Фуэнтеса',
    options: ['Октавио Паса', 'Хуана Рульфо', 'Элены Понятовски']
  },
  tags: [
    {
      type: 'person',
      name: 'Carlos Fuentes'
    },
    {
      type: 'date',
      value: '1962'
    }
  ]
};
