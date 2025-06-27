import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Qué órgano público otorga las cédulas profesionales?',
  answer:
    'Secretaria de Educación Pública (SEP) mediante la Dirección General de Profesiones',
  options: [
    'La Universidad Nacional Autónoma de México (UNAM)',
    'Ministerio Nacional de Educación (MNE) a través de la direccion general de profesionistas',
    'Es facultad exclusiva del Instituto Politécnico Nacional (IPN)'
  ],
  type: 'choice',
  id: 'yes4zc',
  en: {
    question: 'Which public agency issues professional licenses?',
    answer: 'Secretariat of Public Education (SEP) through the General Directorate of Professions',
    options: [
      "National Autonomous University of Mexico (UNAM)",
      "National Ministry of Education (MNE) through the General Directorate of Professionals",
      "It is the exclusive authority of the National Polytechnic Institute (IPN)"
    ]
  },
  ru: {
    question:
      'Какой государственный орган выдает профессиональные удостоверения?',
    answer:
      'Министерство образования (SEP) через главное управление профессионалов',
    options: [
      'Национальный автономный университет Мексики (UNAM)',
      'Министерство национального образования (MNE) через главное управление профессионалов',
      'Это исключительное право Национального политехнического института (IPN)'
    ]
  }
};
