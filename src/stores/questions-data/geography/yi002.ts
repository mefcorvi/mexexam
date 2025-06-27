import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Qué son los pueblos mágicos?',
  answer:
    'Pueblos que han sido reconocidos por su riqueza histórica y cultural. Programa de la Secretaría de Turismo (SECTUR)',
  options: [
    'Pueblos donde los mexicas practicaron sacrificios humanos',
    'Pueblos con una economía pujante',
    'Pueblos que según la leyenda azteca eran habitados por criaturas mitológicas'
  ],
  type: 'choice',
  id: 'yi002',
  en: {
    question: 'What are magical towns?',
    answer: 'Towns that have been recognized for their historical and cultural richness. Program of the Ministry of Tourism (SECTUR)',
    options: [
      "Towns where the Mexicas practiced human sacrifices",
      "Towns with a thriving economy",
      "Towns that, according to Aztec legend, were inhabited by mythical creatures"
    ]
  },
  ru: {
    question: 'Что такое волшебные города?',
    answer:
      'Города, признанные за их историческое и культурное богатство. Программа Секретариата по туризму (SECTUR)',
    options: [
      'Города, где мексиканцы практиковали человеческие жертвоприношения',
      'Города с развивающейся экономикой',
      'Города, которые, согласно ацтекской легенде, были населены мифическими существами'
    ]
  }
};
