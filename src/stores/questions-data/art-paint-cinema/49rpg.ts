import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Quién fué Mario Moreno?',
  answer: 'El más reconocido comediante mexicano',
  note: 'Conocido como Cantinflas',
  options: ['Pintor mexicano', 'Escritor mexicano', 'Historiador mexicano'],
  type: 'choice',
  id: '49rpg',
  en: {
    question: 'Who was Mario Moreno?',
    answer: 'The most recognized Mexican comedian',
    options: [
      "Mexican painter",
      "Mexican writer",
      "Mexican historian"
    ],
    note: 'Known as Cantinflas'
  },
  ru: {
    question: 'Кем был Марио Морено?',
    answer: 'Самым признанным мексиканским комиком',
    options: [
      'Мексиканским художником',
      'Мексиканским писателем',
      'Мексиканским историком'
    ],
    note: 'Известный как Кантифлас'
  },
  zh: {
    question: '马里奥·莫雷诺是谁？',
    answer: '最著名的墨西哥喜剧演员',
    options: [
      "墨西哥画家",
      "墨西哥作家",
      "墨西哥历史学家"
    ],
    note: '以坎蒂弗拉斯闻名'
  }
};
