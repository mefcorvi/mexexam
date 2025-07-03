import OpenAI from 'openai';
import * as fs from 'fs/promises';
import * as dotenv from 'dotenv';
import { zodResponseFormat } from 'openai/helpers/zod.mjs';
import { removeEmptyFields } from '../src/utils/objects';
import { z } from 'zod';
import {
  Package,
  packageSchema,
  Question
} from '../src/utils/questions-schema';
import path from 'path';

const languages = ['en', 'es', 'zh', 'ru'] as const;
type Language = (typeof languages)[number];
const languageNames = {
  en: 'English',
  es: 'Spanish',
  zh: 'Chinese',
  ru: 'Russian'
};

// Load environment variables
dotenv.config({ path: 'dev.env' });

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const schema = z.object({
  question: z.string(),
  answer: z.string(),
  options: z.array(z.string()),
  note: z.string()
});

type Schema = z.infer<typeof schema>;

async function translateText(
  data: Partial<Schema>,
  targetLanguage: 'English' | 'Russian' | 'Chinese' = 'English'
): Promise<Schema> {
  const languageDirection =
    targetLanguage === 'English'
      ? 'Spanish to English'
      : targetLanguage === 'Russian'
        ? 'Spanish to Russian'
        : 'Spanish to Chinese';
  const prompt = `Translate fields of the following object from Spanish to ${targetLanguage}. Keep proper nouns (names, places) as they are unless they have a common ${targetLanguage} equivalent. Maintain the original meaning and tone.

Object to translate: ${JSON.stringify(
    removeEmptyFields({
      question: data.question,
      answer: data.answer,
      options:
        data.options && data.options?.length > 0 ? data.options : undefined,
      note: data.note ? data.note : undefined
    }),
    null,
    2
  )}

${targetLanguage} translation:`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `You are a professional translator specializing in ${languageDirection} translation. Always provide accurate, natural-sounding translations while preserving proper nouns and technical terms.`
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    response_format: zodResponseFormat(schema, 'source'),
    temperature: 0.3
  });

  console.log('usage', response.usage?.total_tokens);

  const responseText = response.choices[0]?.message?.content;

  if (!responseText) {
    throw new Error('No response from OpenAI');
  }

  const parsed = schema.safeParse(JSON.parse(responseText));
  if (!parsed.success) {
    throw new Error('Invalid response from OpenAI', {
      cause: parsed.error
    });
  }

  return parsed.data;
}

async function loadPackage(packagePath: string): Promise<Package> {
  const data = await fs.readFile(packagePath, {
    encoding: 'utf-8'
  });
  const json = JSON.parse(data);
  return packageSchema.parse(json);
}

async function savePackage(packagePath: string, data: Package): Promise<void> {
  await fs.writeFile(packagePath, JSON.stringify(data, null, 2), {
    encoding: 'utf-8'
  });
}

function isQuestionTranslated(
  question: Question,
  targetLanguage: Language
): boolean {
  const spanishData = {
    answer: question.answer.es,
    question: question.question.es,
    options: question.options
      .map((option) => option.es)
      .filter((x) => x !== undefined),
    note: question.note.es
  };

  const targetLanguageData = {
    answer: question.answer[targetLanguage],
    question: question.question[targetLanguage],
    options: question.options
      .map((option) => option[targetLanguage])
      .filter((x) => x !== undefined),
    note: question.note[targetLanguage]
  };

  if (
    spanishData.answer !== undefined &&
    targetLanguageData.answer === undefined
  ) {
    return false;
  }

  if (
    spanishData.question !== undefined &&
    targetLanguageData.question === undefined
  ) {
    return false;
  }

  if (spanishData.options.length !== targetLanguageData.options.length) {
    return false;
  }

  if (spanishData.note !== undefined && targetLanguageData.note === undefined) {
    return false;
  }

  return true;
}

async function main(): Promise<void> {
  if (!process.env.OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY environment variable is required');
    process.exit(1);
  }

  const mexExamPackagePath = path.join(process.cwd(), 'data', 'mexexam');
  const packageData = await loadPackage(mexExamPackagePath);

  for (const section of packageData.sections) {
    for (const question of section.questions) {
      for (const language of languages) {
        if (isQuestionTranslated(question, language)) {
          continue;
        }

        const translatedQuestion = await translateText({
          answer: question.answer.es,
          options: question.options
            .map((option) => option.es)
            .filter((x) => x !== undefined),
          question: question.question.es,
          note: question.note.es
        });

        question.answer[language] = translatedQuestion.answer;
        question.question[language] = translatedQuestion.question;
        question.options.forEach((option, index) => {
          option[language] = translatedQuestion.options[index];
        });
        question.note[language] = translatedQuestion.note;

        console.log(
          `✓ Added ${languageNames[language]} translation to question ${question.id}`
        );
      }
    }
  }

  await savePackage(mexExamPackagePath, packageData);
}

main().catch(console.error);
