import type { QuestionData } from '../../interfaces';

export const question: QuestionData = {
  question: '¿A quién le llaman el benemérito de las américas?',
  answer: 'Benito Juárez',
  options: ['Guadalupe Victoria', 'Anastacio Bustamante', 'Vicente Guerrero'],
  type: 'choice',
  id: 'eyzvo',
  note: `<ul>
        <li><strong>Benito Juárez:</strong> 
            <p>Es conocido como el "Benemérito de las Américas" por su defensa de la soberanía mexicana durante la intervención francesa y sus reformas liberales. Fue presidente de México y luchó por la separación de la Iglesia y el Estado.</p>
        </li>
        <li><strong>Guadalupe Victoria:</strong> 
            <p>Primer presidente de México tras la independencia. Su mandato sentó las bases del nuevo Estado, pero no se le asocia con el título de "Benemérito de las Américas".</p>
        </li>
        <li><strong>Anastasio Bustamante:</strong> 
            <p>Militar y político que ocupó la presidencia varias veces en el siglo XIX. No tiene relación directa con el título de "Benemérito de las Américas".</p>
        </li>
        <li><strong>Vicente Guerrero:</strong> 
            <p>Figura clave en la guerra de independencia. Fue presidente y abolió la esclavitud en México, pero no es conocido con ese título.</p>
        </li>
    </ul>`,
  en: {
    question: 'Who is called the benemérito of the Americas?',
    answer: 'Benito Juárez',
    options: [
      "Guadalupe Victoria",
      "Anastacio Bustamante",
      "Vicente Guerrero"
    ]
  },
  ru: {
    question: 'Кого называют заслуженным деятелем Америки?',
    answer: 'Бенито Хуарес',
    options: [
      'Гвадалупе Виктория',
      'Анастасио Бустаманте',
      'Висенте Герреро'
    ],
    note: `<ul>
        <li><strong>Бенито Хуарес:</strong> 
            <p>Известен как «Бенемерито де лас Америкас» за защиту суверенитета Мексики во время французской интервенции и либеральные реформы. Был президентом Мексики и выступал за разделение церкви и государства.</p>
        </li>
        <li><strong>Гуадалупе Виктория:</strong> 
            <p>Первый президент Мексики после обретения независимости. Его правление заложило основы нового государства, но это звание ему не присваивали.</p>
        </li>
        <li><strong>Анастасио Бустаманте:</strong> 
            <p>Военный и политик, несколько раз занимавший пост президента в XIX веке. С этим званием не связан.</p>
        </li>
        <li><strong>Висенте Герреро:</strong> 
            <p>Ключевая фигура войны за независимость. Будучи президентом, отменил рабство в Мексике, но этого титула не носит.</p>
        </li>
    </ul>`
  }
};
