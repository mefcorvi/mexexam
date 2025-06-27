export type LangModule = (typeof import('./en'))['data'];

export type LocalizationKey = keyof LangModule;

export type LocalizationData = { [k in LocalizationKey]: string };

export type Locale = 'en' | 'es' | 'ru';
