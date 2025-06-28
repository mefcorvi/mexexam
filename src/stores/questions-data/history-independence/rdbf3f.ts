import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: 'Presidente mexicano que duró más de treinta años en el poder',
  answer: 'Porfirio Díaz',
  note: 'Duró 34 años.',
  options: ['Benito Juárez', 'Guadalupe Victoria', 'Vicente Fox'],
  type: 'choice',
  id: 'rdbf3f',
  en: {
    question: 'Mexican president who lasted more than thirty years in power',
    answer: 'Porfirio Díaz',
    options: [
      "Benito Juárez",
      "Guadalupe Victoria",
      "Vicente Fox"
    ],
    note: 'Lasted 34 years.'
  },
  ru: {
    question:
      'Мексиканский президент, который пробыл у власти более тридцати лет',
    answer: 'Порфирио Диас',
    options: ['Бенито Хуарес', 'Гвадалупе Виктория', 'Висенте Фокс'],
    note: 'Пробыл 34 года.'
  },
  zh: {
    question: '在位超过三十年的墨西哥总统',
    answer: '波菲里奥·迪亚斯',
    options: [
      "贝尼托·华雷斯",
      "瓜达卢佩·维多利亚",
      "文森特·福克斯"
    ],
    note: '在位34年。'
  }
};
