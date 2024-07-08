export type SectionData = {
  id: string;
  title: string;
  ru: {
    title: string;
  };
  questions: {
    id: string;
    type: 'text' | 'choice';
    question: string;
    answer: string;
    options?: string[];
    note?: string;
    noteImage?: string;
    ru: {
      question: string;
      answer: string;
      options?: string[];
      note?: string;
    };
    tags?: Tag[];
  }[];
};

/**
 * A tag is a piece of metadata that can be associated with a question.
 */
export type Tag = DateRangeTag | DateTag | PersonTag | StateTag | EventTag;

/**
 * Related to a range of dates, e.g. "1939-1945", "2024-01-01 - 2024-01-15", etc.
 */
export type DateRangeTag = {
  type: 'range';
  from: string;
  to: string;
};

/**
 * Related to a specific date, e.g. "2024-09-16", "1945", etc.
 */
export type DateTag = {
  type: 'date';
  value: string;
};

/**
 * Related to a specific person, e.g. "Benito Juárez", "Frida Kahlo", etc.
 */
export type PersonTag = {
  type: 'person';
  name: string;
};

/**
 * Related to a specific state, e.g. CDMX, Jalisco, etc.
 */
export type StateTag = {
  type: 'state';
  value: string;
};

/**
 * Related to a specific event, e.g. "Independence Day", "Revolution Day", festivals, awards, etc.
 */
export type EventTag = {
  type: 'event';
  value: string;
};

export type QuestionsData = {
  sections: SectionData[];
};
