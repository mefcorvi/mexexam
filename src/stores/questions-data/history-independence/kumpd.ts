import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿A que se conoce como la Ley de Fuga?',
  answer: 'Un tipo de ejecución usada en el Porfiriato',
  note: 'Consistía en hacerle creer a un prisionero que podía escapar para asesinarlo por la espalda.',
  options: [
    'Expulsión del país usada en el Porfiriato',
    'Castigo por no pagar impuestos',
    'Deportación de obreros en el Porfiriato'
  ],
  type: 'choice',
  id: 'kumpd',
  en: {
    question: 'What is known as the Law of Flight?',
    answer: 'A type of execution used during the Porfirio Díaz regime',
    options: [
      "Expulsion from the country used during the Porfirio Díaz regime",
      "Punishment for not paying taxes",
      "Deportation of workers during the Porfirio Díaz regime"
    ],
    note: 'It consisted of making a prisoner believe they could escape in order to kill them from behind.'
  },
  ru: {
    question: 'Что известно как Закон о побеге?',
    answer: 'Тип казни, использовавшийся в эпоху Порфириата',
    options: [
      'Изгнание из страны, использовавшееся в эпоху Порфириата',
      'Наказание за неуплату налогов',
      'Депортация рабочих в эпоху Порфириата'
    ],
    note: 'Заключалось в том, чтобы заставить заключенного поверить, что он может сбежать, чтобы убить его в спину.'
  },
  zh: {
    question: '什么被称为逃亡法？',
    answer: '在波菲里奥时期使用的一种处决方式',
    options: [
      "在波菲里奥时期的驱逐出境",
      "因未缴税而受到的惩罚",
      "在波菲里奥时期对工人的驱逐"
    ],
    note: '其内容是让囚犯相信自己可以逃跑，从而在他背后杀死他。'
  }
};
