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

  return {
    add,
    t
  };
});
