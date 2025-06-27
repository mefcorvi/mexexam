import type { Locale, LocalizationData, LocalizationKey } from '@/lang';
import { createSharedComposable } from '@vueuse/core';
import { ref } from 'vue';
import { data as enData } from '@/lang/en';
import { data as ruData } from '@/lang/ru';
import { data as esData } from '@/lang/es';

// Function to detect browser language
const detectBrowserLanguage = (): Locale => {
  // Get browser language
  const browserLang = navigator.language || navigator.languages?.[0] || 'en';

  // Extract language code (e.g., 'ru-RU' -> 'ru', 'es-ES' -> 'es', 'en-US' -> 'en')
  const langCode = browserLang.split('-')[0].toLowerCase();

  // Check if we support this language
  if (langCode === 'ru') {
    return 'ru';
  }
  if (langCode === 'en') {
    return 'en';
  }

  // Default to Spanish for all other languages
  return 'es';
};

// Get saved language from localStorage or detect from browser
const getInitialLanguage = (): Locale => {
  const saved = localStorage.getItem('uiLanguage') as Locale;
  if (saved && (saved === 'en' || saved === 'es' || saved === 'ru')) {
    return saved;
  }

  const detected = detectBrowserLanguage();
  localStorage.setItem('uiLanguage', detected);
  return detected;
};

export const useLocalization = createSharedComposable(() => {
  const dict: Record<Locale, LocalizationData> = {
    en: enData,
    es: esData,
    ru: ruData
  };

  const locale = ref<Locale>(getInitialLanguage());

  // Watch for changes and save to localStorage
  const saveLanguage = (newLocale: Locale) => {
    localStorage.setItem('uiLanguage', newLocale);
  };

  return {
    locale,
    t: (key: LocalizationKey) => {
      if (!dict[locale.value]) {
        return key;
      }

      return dict[locale.value][key] || key;
    },
    saveLanguage
  };
});
