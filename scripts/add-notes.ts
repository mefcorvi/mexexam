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

const noteSchema = z.object({
  note: z.string()
});

type NoteSchema = z.infer<typeof noteSchema>;

async function generateNote(
  question: string,
  answer: string,
  options: string[],
  targetLanguage: 'English' | 'Spanish' | 'Chinese' | 'Russian'
): Promise<string> {
  const prompt = `Generate a very short, factual note in ${targetLanguage} that provides the key fact to remember for this question. The note should be:
- Only 1 short sentence or phrase
- Pure facts, no explanations
- Easy to memorize
- Written in ${targetLanguage}

Question: ${question}
Correct Answer: ${answer}
All Options: ${options.join(', ')}

Key fact in ${targetLanguage}:`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `You are an expert at creating concise, factual memory aids in ${targetLanguage}. Provide only the essential fact needed to remember the correct answer. Keep it extremely short - one sentence maximum.`
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    response_format: zodResponseFormat(noteSchema, 'source'),
    temperature: 0.3
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

  return parsed.data.note;
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

  return hasContent && !hasNote;
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

        question.note[language] = note;

        console.log(
          `✓ Added ${languageNames[language]} note to question ${question.id}`
        );
      }
    }
  }

  await savePackage(mexExamPackagePath, packageData);
  console.log('Notes generation completed successfully!');
}

main().catch(console.error);
