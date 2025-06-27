import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question:
    'Poema que escribió Bernardo Balbuena sobre la Nueva España en 1604',
  answer: 'La Grandeza Mexicana',
  options: ['Desamor', 'Detente', 'Fragmento de Nocturno'],
  type: 'choice',
  id: 'm4v3yt',
  ru: {
    question:
      'Стихотворение, написанное Бернардо Бальбуэной о Новой Испании в 1604 году',
    answer: 'Величие Мексики',
    options: ['Без любви', 'Стой', 'Фрагмент Ноктюрна']
  },
  tags: [
    {
      type: 'person',
      name: 'Bernardo Balbuena'
    },
    {
      type: 'date',
      value: '1604'
    }
  ]
};
