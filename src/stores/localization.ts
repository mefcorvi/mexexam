import type { Locale, LocalizationData, LocalizationKey } from '@/lang';
import { createSharedComposable } from '@vueuse/core';
import { ref } from 'vue';
import { data as enData } from '@/lang/en';
import { data as ruData } from '@/lang/ru';
import { data as esData } from '@/lang/es';
import { data as zhData } from '@/lang/zh';

// Function to detect browser language
const detectBrowserLanguage = (): Locale => {
  // Get browser language
  const browserLang = navigator.language || navigator.languages?.[0] || 'en';

  // Extract language code (e.g., 'ru-RU' -> 'ru', 'es-ES' -> 'es', 'en-US' -> 'en', 'zh-CN' -> 'zh')
  const langCode = browserLang.split('-')[0].toLowerCase();

  // Check if we support this language
  if (langCode === 'ru') {
    return 'ru';
  }
  if (langCode === 'en') {
    return 'en';
  }
  if (langCode === 'zh') {
    return 'zh';
  }

  // Default to Spanish for all other languages
  return 'es';
};

// Get saved language from localStorage or detect from browser
const getInitialLanguage = (): Locale => {
  const saved = localStorage.getItem('uiLanguage') as Locale;
  if (
    saved &&
    (saved === 'en' || saved === 'es' || saved === 'ru' || saved === 'zh')
  ) {
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
    ru: ruData,
    zh: zhData
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'ru', name: 'Русский' },
    { code: 'zh', name: '中文' }
  ];

  const locale = ref<Locale>(getInitialLanguage());

  // Watch for changes and save to localStorage
  const saveLanguage = (newLocale: Locale) => {
    localStorage.setItem('uiLanguage', newLocale);
  };

  return {
    locale,
    languages,
    t: (key: LocalizationKey) => {
      if (!dict[locale.value]) {
        return key;
      }

      return dict[locale.value][key] || key;
    },
    getLanguageName: (code: Locale) => {
      return languages.find((lang) => lang.code === code)?.name || 'Unknown';
    },
    saveLanguage
  };
});
