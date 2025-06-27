import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿Dónde se ubica el Teatro Juárez?',
  answer: 'Guanajuato',
  note: `<ul>
      <li><strong>Guanajuato:</strong> 
          <p>El Teatro Juárez se encuentra en Guanajuato. Inaugurado en 1903, es famoso por su arquitectura neoclásica y art nouveau, y es sede del Festival Internacional Cervantino.</p>
      </li>
      <li><strong>Zacatecas:</strong> 
          <p>Ciudad con importante herencia colonial, aunque el Teatro Juárez no está aquí. Su teatro más conocido es el Fernando Calderón.</p>
      </li>
      <li><strong>Jalisco:</strong> 
          <p>Famoso por la música mariachi y el tequila. En su capital, Guadalajara, se encuentra el Teatro Degollado.</p>
      </li>
      <li><strong>CDMX:</strong> 
          <p>Centro cultural de México, aunque el Teatro Juárez no está aquí. Alberga el Palacio de Bellas Artes.</p>
      </li>
      </ul>`,
  options: ['Zacatecas', 'Jalisco', 'CDMX'],
  type: 'choice',
  id: '4ls26c',
  en: {
    question: 'Where is the Juárez Theater located?',
    answer: 'Guanajuato',
    options: [
      "Zacatecas",
      "Jalisco",
      "CDMX"
    ]
  },
  ru: {
    question: 'Где находится Театр Хуарес?',
    answer: 'Гуанахуато',
    options: ['Сакатекас', 'Халиско', 'Мехико'],
    note: `<ul>
        <li><strong>Гуанахуато:</strong> 
            <p>Театр Хуарес находится в Гуанахуато. Открыт в 1903 году, известен своей архитектурой в стиле неоклассицизма и ар-нуво. Здесь проходит фестиваль Сервантеса.</p>
        </li>
        <li><strong>Сакатекас:</strong> 
            <p>Колониальный город с богатой историей, но Театр Хуарес там не расположен. Известен Театр Фернандо Кальдерона.</p>
        </li>
        <li><strong>Халиско:</strong> 
            <p>Известен мариачи и текилой. В Гвадалахаре расположен Театр Дегольядо.</p>
        </li>
        <li><strong>Мехико (CDMX):</strong> 
            <p>Культурный центр страны, но Театр Хуарес находится не здесь. Известен Дворец изящных искусств.</p>
        </li>
    </ul>`
  },
  tags: [
    {
      type: 'state',
      value: 'Guanajuato'
    }
  ]
};
