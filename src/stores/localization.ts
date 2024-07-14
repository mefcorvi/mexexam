import type { Locale, LocalizationData, LocalizationKey } from '@/lang';
import { createSharedComposable } from '@vueuse/core';
import { ref } from 'vue';
import { data as ruData } from '@/lang/ru';
import { data as esData } from '@/lang/es';

export const useLocalization = createSharedComposable(() => {
  const dict: Record<Locale, LocalizationData> = {
    es: esData,
    ru: ruData
  };

  const locale = ref<Locale>('es');

  return {
    locale,
    t: (key: LocalizationKey) => {
      if (!dict[locale.value]) {
        return key;
      }

      return dict[locale.value][key] || key;
    }
  };
});
