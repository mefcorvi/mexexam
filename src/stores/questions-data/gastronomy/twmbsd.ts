import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Qué es la cajeta?',
  answer: 'Dulce de leche quemada de cabra',
  options: [
    'Dulce de tortilla con azúcar',
    'Dulce de amaranto con miel',
    'Dulce de leche con coco'
  ],
  type: 'choice',
  id: 'twmbsd',
  en: {
    question: 'What is cajeta?',
    answer: 'Burnt goat\'s milk caramel',
    options: [
      "Tortilla candy with sugar",
      "Amaranth candy with honey",
      "Coconut milk candy"
    ]
  },
  ru: {
    question: 'Что такое кахета?',
    answer: 'Карамелизованное козье молоко',
    options: [
      'Сладость из тортильи с сахаром',
      'Сладость из амаранта с медом',
      'Сладость из молока с кокосом'
    ]
  },
  zh: {
    question: '什么是cajeta？',
    answer: '焦糖山羊奶糖',
    options: [
      "糖饼干",
      "蜜饯苋菜",
      "椰子牛奶糖"
    ]
  }
};
