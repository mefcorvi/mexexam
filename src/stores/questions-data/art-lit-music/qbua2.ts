import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Por qué es conocida Sor Juana Inés de la Cruz?',
  answer: 'Escritora más importante del período Novo-hispáno',
  options: ['Actriz en el período Revolucionario', 'Traductora', 'Cantante'],
  type: 'choice',
  id: 'qbua2',
  en: {
    question: 'Why is Sor Juana Inés de la Cruz known?',
    answer: 'The most important writer of the New Spanish period',
    options: [
      "Actress in the Revolutionary period",
      "Translator",
      "Singer"
    ]
  },
  ru: {
    question: 'Почему известна Сор Хуана Инес де ла Крус?',
    answer: 'Самая важная писательница новоиспанского периода',
    options: ['Актриса в период революции', 'Переводчица', 'Певица']
  },
  tags: [
    {
      type: 'person',
      name: 'Sor Juana Inés de la Cruz'
    }
  ]
};
