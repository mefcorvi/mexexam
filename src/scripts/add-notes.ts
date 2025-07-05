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
  note: z.string()
});

async function generateNote(
  question: string,
  answer: string,
  options: string[],
  targetLanguage: 'English' | 'Spanish' | 'Chinese' | 'Russian'
): Promise<string> {
  const prompt = `You are preparing for the Mexican naturalization exam.  
Given the question and answer below, write one short note of 1–2 sentences in ${targetLanguage} that *complements* the answer by adding a memorable fact, brief context, or mnemonic.
Note should follow these rules:
- Written in ${targetLanguage}
- Context of the note is mexican history and culture
- Pure facts, no general information
- Avoid repeating information from the question or answer
- Note should be interesting and engaging

Question: ${question}
Correct Answer: ${answer}
All Options: ${options.join(', ')}

Educational note in ${targetLanguage}:`;

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

  return true || (hasContent && !hasNote);
}

async function main(): Promise<void> {
  if (!process.env.OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY environment variable is required');
    process.exit(1);
  }

  const mexExamPackagePath = path.join(process.cwd(), 'data', 'mexexam.json');
  const packageData = await loadPackage(mexExamPackagePath);

  const totalQuestions = packageData.sections.flatMap(
    (section) => section.questions
  ).length;

  let i = 0;

  for (const section of packageData.sections) {
    for (const question of section.questions) {
      i++;

      const questionText = question.question.es;
      const answerText = question.answer.es;
      const optionsText = question.options
        .map((option) => option.es)
        .filter((x) => x !== undefined);

      if (!questionText || !answerText) {
        console.log(`Skipping question ${question.id}  - missing content`);
        continue;
      }

      for (const language of ['en', 'ru', 'es', 'zh'] as const) {
        if (!needsNote(question, language)) {
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

        const progress = (i / totalQuestions) * 100;
        console.log(`Progress: ${progress.toFixed(2)}%`);

        console.log(
          `✓ Added "${note}" note to question "${question.question[language]}"`
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
