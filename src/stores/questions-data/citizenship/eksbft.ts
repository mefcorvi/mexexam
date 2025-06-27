import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Quienes crean y aprueban las leyes en México?',
  answer: 'Los diputados y senadores del congreso de la unión',
  options: [
    'Los ciudadanos por medio del voto',
    'El presidente de la república',
    'Los jueces y magistrados de la suprema corte de justicia'
  ],
  type: 'choice',
  id: 'eksbft',
  en: {
    question: 'Who creates and approves laws in Mexico?',
    answer: 'The deputies and senators of the Congress of the Union',
    options: [
      "Citizens through voting",
      "The President of the Republic",
      "The judges and magistrates of the Supreme Court of Justice"
    ]
  },
  ru: {
    question: 'Кто создает и принимает законы в Мексике?',
    answer: 'Депутаты и сенаторы конгресса союза',
    options: [
      'Граждане посредством голосования',
      'Президент республики',
      'Судьи и магистраты верховного суда правосудия'
    ]
  }
};
