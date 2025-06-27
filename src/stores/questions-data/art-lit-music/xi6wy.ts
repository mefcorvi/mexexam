import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question:
    '¿Cómo se llama el premio que entrega el Instituto Nacional de Bellas Artes?',
  answer: 'Premio Bellas Artes',
  options: ['José Vasconcelos', 'El Heraldo de México', 'Premio Ohtli'],
  note: `<ul>
      <li><strong>Premio Bellas Artes</strong> – Es la respuesta correcta, es el principal premio otorgado por el Instituto Nacional de Bellas Artes.</li>
      <li><strong>José Vasconcelos</strong> – Es un premio otorgado por logros culturales, pero no está directamente relacionado con el INBA.</li>
      <li><strong>El Heraldo de México</strong> – Es un premio periodístico, no vinculado al INBA.</li>
      <li><strong>Premio Ohtli</strong> – Se entrega a mexicanos por su apoyo a la diáspora mexicana, sin relación con el INBA.</li>
    </ul>`,
  type: 'choice',
  id: 'xi6wy',
  ru: {
    question:
      'Как называется премия, вручаемая Национальным институтом изящных искусств?',
    answer: 'Премия изящных искусств',
    options: ['Хосе Васконселос', 'Эль Херальдо де Мехико', 'Премия Охтли'],
    note: `<ul>
        <li><strong>Premio Bellas Artes</strong> – Это правильный ответ, это основная премия от Национального института изящных искусств.</li>
        <li><strong>José Vasconcelos</strong> – Премия, вручаемая за культурные достижения, но не связана с INBA напрямую.</li>
        <li><strong>El Heraldo de México</strong> – Журналистская премия, не связана с INBA.</li>
        <li><strong>Premio Ohtli</strong> – Присуждается мексиканцам за вклад в поддержку мексиканской диаспоры, не имеет отношения к INBA.</li>
      </ul>`
  },
  tags: [
    {
      type: 'state',
      value: 'CDMX'
    },
    {
      type: 'date',
      value: '1945'
    }
  ]
};
