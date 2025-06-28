import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿En qué consistió la conspiración de Valladolid?',
  answer:
    'Pretendían establecer un congreso soberano que gobernaría a nombre de Fernando VII',
  note: '21 de diciembre de 1809.',
  options: [
    'Establecer el imperio de Fernando VII',
    'Derrocar el gobierno de Fernando VII',
    'Pretendian establecer un congreso soberano independiente de Fernando VII'
  ],
  type: 'choice',
  id: 'jblzne',
  en: {
    question: 'What did the Valladolid conspiracy consist of?',
    answer: 'They aimed to establish a sovereign congress that would govern in the name of Fernando VII.',
    options: [
      "Establish the empire of Fernando VII",
      "Overthrow the government of Fernando VII",
      "They intended to establish a sovereign congress independent of Fernando VII"
    ],
    note: 'December 21, 1809.'
  },
  ru: {
    question: 'В чем заключался заговор в Вальядолиде?',
    answer:
      'Они намеревались создать суверенный конгресс, который управлял бы от имени Фердинанда VII',
    options: [
      'Создать империю Фердинанда VII',
      'Свергнуть правительство Фердинанда VII',
      'Намеревались создать суверенный конгресс, независимый от Фердинанда VII'
    ],
    note: '21 декабря 1809 года.'
  },
  zh: {
    question: '巴利亚多利德的阴谋是什么？',
    answer: '他们打算建立一个以费尔南多七世名义统治的主权大会',
    options: [
      "建立费尔南多七世的帝国",
      "推翻费尔南多七世的政府",
      "他们打算建立一个独立于费尔南多七世的主权大会"
    ],
    note: '1809年12月21日。'
  }
};
