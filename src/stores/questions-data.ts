import type { DeepReadonly } from 'vue';
import type { QuestionsData } from './questions/interfaces';
import { science } from './questions/science';
import { citizenship } from './questions/citizenship';
import { gastronomy } from './questions/gastronomy';
import { geografy } from './questions/geografy';
import { historyColony } from './questions/history-colony';
import { historyIndependency } from './questions/history-independency';
import { historyModern } from './questions/history-modern';
import { historyPrespain } from './questions/history-prespain';
import { historyRevolution } from './questions/history-revoluction';
import { artLitMusic } from './questions/art-lit-music';
import { artPaintCinema } from './questions/art-paint-cinema';
import { traditionsCulture } from './questions/traditions-culture';

export const questionsData: DeepReadonly<QuestionsData> = {
  sections: [
    science,
    citizenship,
    gastronomy,
    geografy,
    historyColony,
    historyIndependency,
    historyModern,
    historyPrespain,
    historyRevolution,
    artLitMusic,
    artPaintCinema,
    traditionsCulture
  ]
};
