import OpenAI from 'openai';
import * as fs from 'fs/promises';
import * as dotenv from 'dotenv';
import { zodResponseFormat } from 'openai/helpers/zod.mjs';
import { z } from 'zod';
import {
  type Package,
  packageSchema,
  type Question
} from '../utils/questions-schema';
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

const factCheckSchema = z.object({
  isFactual: z.boolean()
});

const extendedFactCheckSchema = z.object({
  isFactual: z.boolean(),
  explanation: z.string()
});

async function factCheckNote(
  note: string,
  answer: string,
  question: string,
  targetLanguage: 'English' | 'Spanish' | 'Chinese' | 'Russian',
  withExplanation: boolean
): Promise<{
  isFactual: boolean;
  explanation?: string;
}> {
  const prompt = `You are a fact-checker specializing in Mexican history and culture. 
Please verify the accuracy of the following educational note in the context of the question and the correct answer.
Don't need to fact-check the correct answer or the question, they are already fact-checked.

Question: ${question}
Correct Answer: ${answer}
Note to fact-check: ${note}

Please analyze the note for:
1. Historical accuracy
2. Cultural accuracy
3. Factual correctness
4. Any misleading or incorrect information

Respond in ${targetLanguage} and provide:
- Whether the note is factually correct (true/false)
${withExplanation ? '- Brief explanation of any issues found' : ''}

Focus on Mexican history, geography, government, culture, and current affairs.`;

  const schema = withExplanation ? extendedFactCheckSchema : factCheckSchema;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `You are a fact-checking expert specializing in Mexican history and culture. Provide accurate, unbiased verification of educational content.`
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    response_format: zodResponseFormat(schema, 'source'),
    temperature: 0.1
  });

  const responseText = response.choices[0]?.message?.content;

  if (!responseText) {
    throw new Error('No response from OpenAI during fact checking');
  }

  const parsed = schema.safeParse(JSON.parse(responseText));
  if (!parsed.success) {
    throw new Error('Invalid fact check response from OpenAI');
  }

  return parsed.data;
}

async function generateNote(
  question: string,
  answer: string,
  options: string[],
  targetLanguage: 'English' | 'Spanish' | 'Chinese' | 'Russian',
  additionalRules: string[]
): Promise<string> {
  const prompt = `You are preparing for the Mexican naturalization exam.  
Given the question and answer below, write one short note of 1–2 sentences in ${targetLanguage} that *complements* the answer by adding a memorable fact, brief context, or mnemonic.
Note should follow these rules:
- Written in ${targetLanguage}
- Context of the note is mexican history and culture
- Pure facts, no general information
- Avoid repeating information from the question or answer
- Note should be interesting and engaging
- Note has to be **factually correct**
- ${additionalRules.join('\n')}

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
    temperature: 0.3
  });

  console.log('usage', response.usage?.total_tokens);

  const responseText = response.choices[0]?.message?.content;

  if (!responseText) {
    throw new Error('No response from OpenAI');
  }

  const parsed = noteSchema.safeParse(JSON.parse(responseText));
  if (!parsed.success) {
    throw new Error('Invalid response from OpenAI');
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
        .filter((x): x is string => x !== undefined);

      if (!questionText || !answerText) {
        console.log(`Skipping question ${question.id}  - missing content`);
        continue;
      }

      for (const language of ['en', 'ru', 'es', 'zh'] as const) {
        let isFactual = true;

        if (!needsNote(question, language) && question.note[language]) {
          const noteText = question.note[language];
          if (noteText) {
            const factCheckResult = await factCheckNote(
              noteText,
              answerText,
              questionText,
              languageNames[language] as
                | 'English'
                | 'Spanish'
                | 'Chinese'
                | 'Russian',
              false
            );

            isFactual = factCheckResult.isFactual;

            if (isFactual) {
              console.log(
                `✓ Note for question "${question.question[language]}" is factual`
              );
              continue;
            } else {
              console.log(
                `❌ Note for question "${question.question[language]}" is not factual`
              );
            }
          }
        }

        let attempts = 0;
        let additionalRules: string[] = [];

        if (!isFactual) {
          additionalRules = [
            `- Do not use information from the note "${question.note[language]}"`
          ];
        }

        while (!isFactual && attempts < 3) {
          const note = await generateNote(
            questionText,
            answerText,
            optionsText,
            languageNames[language] as
              | 'English'
              | 'Spanish'
              | 'Chinese'
              | 'Russian',
            additionalRules
          );

          question.note[language] = note;

          const factCheckResult = await factCheckNote(
            note,
            answerText,
            questionText,
            languageNames[language] as
              | 'English'
              | 'Spanish'
              | 'Chinese'
              | 'Russian',
            attempts === 2
          );

          isFactual = factCheckResult.isFactual;

          if (!isFactual) {
            console.log(
              `❌ Note for question "${question.question[language]}" is not factual`
            );

            if (factCheckResult.explanation) {
              console.log(`Explanation: ${factCheckResult.explanation}`);
            }

            additionalRules.push(
              `- Do not use information from the note "${note}"`
            );
          }

          attempts++;

          if (attempts === 3 && !isFactual) {
            console.log(
              `Removing note for the question ${question.question[language]}`
            );
            delete question.note[language];
          }
        }

        const progress = (i / totalQuestions) * 100;
        console.log(`Progress: ${progress.toFixed(2)}%`);

        console.log(
          `✓ Added "${question.note[language]}" note to question "${question.question[language]}"`
        );
      }

      if (i % 20 === 0) {
        console.log(`Saving package after ${i} questions`);
        await savePackage(mexExamPackagePath, packageData);
      }
    }
  }

  await savePackage(mexExamPackagePath, packageData);
  console.log('Notes generation completed successfully!');
}

main().catch(console.error);
