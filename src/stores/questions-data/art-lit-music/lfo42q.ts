import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Quién escribió "La Noche de Tlatelolco"?',
  answer: 'Elena Poniatowska',
  note: 'Escritora, periodista y activista mexicana, nacida en Francia. Es una crónica basada en la matanza estudiantil sucedida durante el 2 de octubre de 1968 en la Plaza de las Tres Culturas.',
  options: ['Octavio Paz', 'Juan Rulfo', 'Carlos Fuentes'],
  type: 'choice',
  id: 'lfo42q',
  en: {
    question: 'Who wrote "La Noche de Tlatelolco"?',
    answer: 'Elena Poniatowska',
    options: [
      "Octavio Paz",
      "Juan Rulfo",
      "Carlos Fuentes"
    ],
    note: 'Mexican writer, journalist, and activist, born in France. It is a chronicle based on the student massacre that occurred on October 2, 1968, in the Plaza de las Tres Culturas.'
  },
  ru: {
    question: 'Кто написал "Ночь Тлателолко"?',
    answer: 'Элена Понятовска',
    options: ['Октавио Пас', 'Хуан Рульфо', 'Карлос Фуэнтес'],
    note: 'Писательница, журналистка и активистка мексиканского происхождения, родилась во Франции. Это хроника, основанная на студенческой бойне, произошедшей 2 октября 1968 года на площади Трех Культур.'
  },
  tags: [
    {
      type: 'person',
      name: 'Elena Poniatowska'
    },
    {
      type: 'date',
      value: '1971'
    }
  ]
};
