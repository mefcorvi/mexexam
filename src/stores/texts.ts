import { createSharedComposable } from '@vueuse/core';
import textsPackage from '../../data/texts.json';
import text1Package from '../../data/dia_de_muertos.json';
import text2Package from '../../data/leyenda_volcanes.json';
import text3Package from '../../data/leyenda_tequila.json';
import type {
  LocalizedString,
  LocalizedStrings
} from '@/utils/questions-schema';
import { useTranslations } from './translations';

export type Text = {
  id: string;
  title: LocalizedString;
  summary: LocalizedString;
  text: LocalizedStrings;
  questions: TextQuestion[];
};

export type TextQuestion = {
  text: LocalizedString;
  answer: LocalizedString;
  options: LocalizedString[];
};

export type TextsPackage = {
  data: Text[];
};

const packages = [
  textsPackage,
  text1Package,
  text2Package,
  text3Package,
]

export const useTextsStore = createSharedComposable(() => {
  const texts = packages.flatMap(x => x.data);
  const translations = useTranslations();

  const map = new Map<string, Text>();

  for (const text of texts) {
    translations.addLocalizedString(text.summary);
    translations.addLocalizedString(text.title);
    translations.addLocalizedStrings(text.text);

    for (const q of text.questions) {
      translations.addLocalizedString(q.answer);
      translations.addLocalizedString(q.text);
      if (q.options) {
        for (const option of q.options) {
          translations.addLocalizedString(option);
        }
      }
    }

    if (map.has(text.id)) {
      throw new Error(`Duplicated id for text id=${text.id}`);
    }

    map.set(text.id, text);
  }

  const getText = (id: string) => map.get(id) ?? null;

  return {
    texts,
    getText
  };
});
