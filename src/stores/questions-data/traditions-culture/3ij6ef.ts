import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Qué es una tienda de abarrotes?',
  answer:
    'Lugar donde venden productos de uso cotidiano, viveres, articulos de limpieza, etc',
  options: [
    'Venta de inciensos',
    'Tienda de ropa económica',
    'Donde compras zapatos al mayor'
  ],
  type: 'choice',
  id: '3ij6ef',
  ru: {
    question: 'Что такое магазин абарротес?',
    answer:
      'Место, где продают товары повседневного использования, продукты, чистящие средства и т.д.',
    options: [
      'Продажа благовоний',
      'Магазин дешевой одежды',
      'Где покупают обувь оптом'
    ]
  },
  en: {
    question: 'What is a grocery store?',
    answer: 'A place where everyday products, groceries, cleaning supplies, etc. are sold.',
    options: [
      "Incense sales",
      "Affordable clothing store",
      "Where you buy shoes wholesale"
    ]
  },
  zh: {
    question: '什么是杂货店？',
    answer: '出售日常用品、食品、清洁用品等的地方',
    options: [
      "香火销售",
      "经济服装店",
      "批发鞋子"
    ]
  }
};
