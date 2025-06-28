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
    t
  };
});
