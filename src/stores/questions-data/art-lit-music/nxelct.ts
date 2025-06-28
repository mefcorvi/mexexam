import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Quién escribió "Las Voces de Tlatelolco"?',
  answer: 'José Emilio Pacheco',
  note: 'No confundir "Las Voces de Tlatelolco" con "La Noche de Tlatelolco", nótese que son obras y autores diferentes.',
  options: ['Octavio Paz', 'Elena Poniatowska', 'Carlos Fuentes'],
  type: 'choice',
  id: 'nxelct',
  en: {
    question: 'Who wrote "Las Voces de Tlatelolco"?',
    answer: 'José Emilio Pacheco',
    options: [
      "Octavio Paz",
      "Elena Poniatowska",
      "Carlos Fuentes"
    ],
    note: 'Do not confuse "Las Voces de Tlatelolco" with "La Noche de Tlatelolco"; note that they are different works and authors.'
  },
  ru: {
    question: 'Кто написал "Голоса Тлателолко"?',
    answer: 'Хосе Эмилио Пачеко',
    options: ['Октавио Пас', 'Элена Понятовска', 'Карлос Фуэнтес'],
    note: 'Не путайте "Голоса Тлателолко" с "Ночью Тлателолко", обратите внимание, что это разные произведения и авторы.'
  },
  tags: [
    {
      type: 'person',
      name: 'José Emilio Pacheco'
    },
    {
      type: 'date',
      value: '1968-10-02'
    }
  ],
  zh: {
    question: '谁写了《特拉特洛尔科的声音》？',
    answer: '何塞·埃米利奥·帕切科',
    options: [
      "奥克塔维奥·帕斯",
      "埃琳娜·波尼亚托夫斯卡",
      "卡洛斯·富恩特斯"
    ],
    note: '不要将《特拉特洛尔科的声音》与《特拉特洛尔科之夜》混淆，这两部作品及其作者是不同的。'
  }
};
