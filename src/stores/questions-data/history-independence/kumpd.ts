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
    ru: {
      question: 'Что известно как Закон о побеге?',
      answer: 'Тип казни, использовавшийся в эпоху Порфириата',
      options: [
        'Изгнание из страны, использовавшееся в эпоху Порфириата',
        'Наказание за неуплату налогов',
        'Депортация рабочих в эпоху Порфириата'
      ],
      note: 'Заключалось в том, чтобы заставить заключенного поверить, что он может сбежать, чтобы убить его в спину.'
    }
  };
