import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: 'Lema de la UNAM',
  answer: 'Por mi raza hablará el espíritu',
  options: [
    'Por mi raza hablará la gente',
    'Por mi espíritu',
    'Por mi raza hablarán mañana'
  ],
  type: 'choice',
  id: 'oxvm77',
  en: {
    question: 'UNAM\'s motto',
    answer: 'The spirit will speak for my race',
    options: [
      "The people will speak for my race",
      "For my spirit",
      "They will speak for my race tomorrow"
    ]
  },
  ru: {
    question: 'Девиз УНАМ',
    answer: 'За мою расу будет говорить дух',
    options: [
      'За мою расу будет говорить народ',
      'За мой дух',
      'За мою расу будут говорить завтра'
    ]
  },
  zh: {
    question: 'UNAM的座右铭',
    answer: '我的种族将由精神来表达',
    options: [
      "我的种族将由人来表达",
      "为了我的精神",
      "我的种族将在明天发声"
    ]
  }
};
