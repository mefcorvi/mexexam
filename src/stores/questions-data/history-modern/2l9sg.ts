import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Cuál es el lema del Instituto Politécnico Nacional (IPN)?',
  answer: 'La Técnica al Servicio de la Patria',
  options: [
    'Servicio a la Patria',
    'Yo Sirvo de la Patria',
    'La Técnica de la Patria'
  ],
  type: 'choice',
  id: '2l9sg',
  en: {
    question: 'What is the motto of the National Polytechnic Institute (IPN)?',
    answer: 'Technique at the Service of the Homeland',
    options: [
      "Service to the Homeland",
      "I Serve the Homeland",
      "The Technique of the Homeland"
    ]
  },
  ru: {
    question: 'Каков девиз Национального политехнического института (IPN)?',
    answer: 'Техника на службе Родины',
    options: ['Служба Родине', 'Я служу Родине', 'Техника Родины']
  },
  zh: {
    question: '国家 Polytechnic Institute (IPN) 的座右铭是什么？',
    answer: '技术为祖国服务',
    options: [
      "为祖国服务",
      "我为祖国服务",
      "祖国的技术"
    ]
  }
};
