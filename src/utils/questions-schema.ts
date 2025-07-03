import { z } from 'zod';

export const localizedStringSchema = z.object({
  es: z.string().optional(),
  en: z.string().optional(),
  ru: z.string().optional(),
  zh: z.string().optional()
});

export const questionSchema = z.object({
  id: z.string(),
  type: z.string(),
  question: localizedStringSchema,
  answer: localizedStringSchema,
  options: z.array(localizedStringSchema),
  note: localizedStringSchema
});

export const sectionSchema = z.object({
  id: z.string(),
  title: localizedStringSchema,
  questions: z.array(questionSchema)
});

export const packageSchema = z.object({
  id: z.string(),
  title: localizedStringSchema,
  sections: z.array(sectionSchema)
});

export type LocalizedString = z.infer<typeof localizedStringSchema>;
export type Question = z.infer<typeof questionSchema>;
export type Section = z.infer<typeof sectionSchema>;
export type Package = z.infer<typeof packageSchema>;
