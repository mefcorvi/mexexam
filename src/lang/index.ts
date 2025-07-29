export type LangModule = (typeof import('./en'))['data'];

export type LocalizationKey = keyof LangModule;

export type LocalizationData = { [k in LocalizationKey]: string };

export type Locale = 'en' | 'es' | 'ru' | 'zh';

export const locales: Locale[] = ['en', 'es', 'ru', 'zh'];