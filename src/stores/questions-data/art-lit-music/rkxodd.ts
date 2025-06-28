import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question:
    '¿Cómo se llama el premio que entrega Bellas Artes de cuento o literario?',
  answer: 'Amparo Dávila',
  options: ['José Vasconcelos', 'El Heraldo de México', 'Premio Ohtli'],
  type: 'choice',
  id: 'rkxodd',
  en: {
    question: 'What is the name of the award given by Bellas Artes for a short story or literary work?',
    answer: 'Amparo Dávila',
    options: [
      "José Vasconcelos",
      "El Heraldo de México",
      "Premio Ohtli"
    ]
  },
  ru: {
    question:
      'Как называется премия, вручаемая за рассказ или литературное произведение?',
    answer: 'Ампаро Давила',
    options: ['Хосе Васконселос', 'Эль Херальдо де Мехико', 'Премия Охтли']
  },
  tags: [
    {
      type: 'date',
      value: '1976'
    },
    {
      type: 'state',
      value: 'San Luis Potosí'
    },
    {
      type: 'person',
      name: 'Amparo Dávila'
    }
  ],
  zh: {
    question: '美术学院颁发的故事或文学奖叫什么？',
    answer: '安帕罗·达维拉',
    options: [
      "何塞·瓦斯孔塞洛斯",
      "墨西哥先驱报",
      "奥特利奖"
    ]
  }
};
