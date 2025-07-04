import OpenAI from 'openai';
import * as fs from 'fs/promises';
import * as dotenv from 'dotenv';
import { zodResponseFormat } from 'openai/helpers/zod.mjs';
import { z } from 'zod';
import {
  type Package,
  packageSchema,
  type Question
} from '../utils/questions-schema.ts';
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

const noteSchema = z.object({
  note: z.string(),
  translations: z.object({
    es: z.string(),
    zh: z.string(),
    ru: z.string()
  })
});

async function generateNote(
  question: string,
  answer: string,
  options: string[],
  targetLanguage: 'English' | 'Spanish' | 'Chinese' | 'Russian'
): Promise<{
  en: string;
  es: string;
  zh: string;
  ru: string;
}> {
  const prompt = `Generate a very short, factual note in ${targetLanguage} that will help memorize the correct answer to this question. The note should be:
- Only 1-2 short sentences or phrases
- Pure facts, no explanations
- Mention some related facts, but do not repeat information from the question or answer
- Mention some dates or persons if they are not mentioned in the question or answer
- Written in ${targetLanguage}
- Translate the note to Mexican Spanish, Chinese, and Russian

Question: ${question}
Correct Answer: ${answer}
All Options: ${options.join(', ')}

Educational note in ${targetLanguage} (and translation to Mexican Spanish, Chinese, and Russian):`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `You are an educational expert specializing in creating memorable learning notes in ${targetLanguage}. Create concise, educational notes that help students understand and remember the correct answers.`
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    response_format: zodResponseFormat(noteSchema, 'source'),
    temperature: 0.4
  });

  console.log('usage', response.usage?.total_tokens);

  const responseText = response.choices[0]?.message?.content;

  if (!responseText) {
    throw new Error('No response from OpenAI');
  }

  const parsed = noteSchema.safeParse(JSON.parse(responseText));
  if (!parsed.success) {
    throw new Error('Invalid response from OpenAI', {
      cause: parsed.error
    });
  }

  return {
    en: parsed.data.note,
    es: parsed.data.translations.es,
    zh: parsed.data.translations.zh,
    ru: parsed.data.translations.ru
  };
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

function needsNote(question: Question, targetLanguage: Language): boolean {
  // Check if the question has content in the target language but no note
  const hasContent = Boolean(
    question.question[targetLanguage] && question.answer[targetLanguage]
  );
  const hasNote = Boolean(question.note[targetLanguage]);

  return true || (hasContent && !hasNote);
}

async function main(): Promise<void> {
  if (!process.env.OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY environment variable is required');
    process.exit(1);
  }

  const mexExamPackagePath = path.join(process.cwd(), 'data', 'mexexam.json');
  const packageData = await loadPackage(mexExamPackagePath);

  let i = 0;
  let found = false;

  for (const section of packageData.sections) {
    for (const question of section.questions) {
      i++;

      if (question.id === 'tno9tc') {
        console.log('Found question', question.id);
        console.log('Starting from here');
        found = true;
      }

      if (!found) {
        continue;
      }

      for (const language of ['en'] as const) {
        if (!needsNote(question, language)) {
          continue;
        }

        const questionText = question.question[language];
        const answerText = question.answer[language];
        const optionsText = question.options
          .map((option) => option[language])
          .filter((x) => x !== undefined);

        if (!questionText || !answerText) {
          console.log(
            `Skipping question ${question.id} for ${languageNames[language]} - missing content`
          );
          continue;
        }

        const note = await generateNote(
          questionText,
          answerText,
          optionsText,
          languageNames[language] as
            | 'English'
            | 'Spanish'
            | 'Chinese'
            | 'Russian'
        );

        question.note = {
          en: note.en,
          es: note.es,
          zh: note.zh,
          ru: note.ru
        };

        console.log(
          `✓ Added "${note.en}" note to question "${question.question.en}"`
        );
      }

      if (i % 100 === 0) {
        console.log(`Saving package after ${i} questions`);
        await savePackage(mexExamPackagePath, packageData);
      }
    }
  }

  await savePackage(mexExamPackagePath, packageData);
  console.log('Notes generation completed successfully!');
}

main().catch(console.error);
