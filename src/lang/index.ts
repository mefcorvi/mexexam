export type LangModule = (typeof import('./es'))['data'];

export type LocalizationKey = keyof LangModule;

export type LocalizationData = { [k in LocalizationKey]: string };

export type Locale = 'es' | 'ru';
