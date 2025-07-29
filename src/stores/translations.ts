import { locales } from '@/lang';
import type { LocalizedString, LocalizedStrings } from '@/utils/questions-schema';
import { createSharedComposable } from '@vueuse/core';

export const useTranslations = createSharedComposable(() => {
  const translations = new Map<string, string>();

  const add = (
    locale: string,
    key: string | null | undefined,
    value: string | null | undefined
  ) => {
    if (key && value) {
      translations.set(`$${locale}$${key}`, value);
    }
  };

  const addLocalizedString = (s: LocalizedString) => {
    if (!s.es) {
      throw new Error('Spanish localization is not defined');
    }

    for (const l of locales) {
      if (s[l]) {
        add(l, s.es, s[l]);
      }
    }
  };

  const addLocalizedStrings = (arr: LocalizedStrings) => {
    if (!arr.es) {
      throw new Error('Spanish localization is not defined');
    }

    for (const l of locales) {
      const langArray = arr[l];
      if (langArray) {
        if (langArray.length !== arr.es.length) {
          throw new Error(`Length of localization array for language ${l} does not match with Spanish`);
        }

        for (let i = 0; i < langArray.length; i++) {
          const original = arr.es[i];
          const translated = langArray[i];

          if (!original || !translated) {
            throw new Error(`Either Spanish or localized string is empty locale=${l} idx=${i}`);
          }

          add(l, original, translated);
        }
      }
    }
  }

  const t = (locale: string, key: string | null | undefined) => {
    if (!key) {
      return '';
    }

    return translations.get(`$${locale}$${key}`) ?? key;
  };

  add('es', "I don't know", 'No sé');
  add('ru', "I don't know", 'Не знаю');
  add('zh', "I don't know", '我不知道');

  return {
    add,
    addLocalizedString,
    addLocalizedStrings,
    t
  };
});
