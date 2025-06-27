import { Project, QuoteKind, SyntaxKind, ts, Writers } from 'ts-morph';
import OpenAI from 'openai';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { z } from 'zod';
import { zodResponseFormat } from 'openai/helpers/zod.mjs';

// Load environment variables
dotenv.config({ path: 'dev.env' });

const __dirname = process.cwd();

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

async function translateText<T extends z.ZodTypeAny>(
  schema: T,
  data: z.infer<T>,
  targetLanguage: 'English' | 'Russian' = 'English'
): Promise<z.infer<T>> {
  const languageDirection =
    targetLanguage === 'English' ? 'Spanish to English' : 'Spanish to Russian';
  const prompt = `Translate fields of the following object from Spanish to ${targetLanguage}. Keep proper nouns (names, places) as they are unless they have a common ${targetLanguage} equivalent. Maintain the original meaning and tone.

Object to translate: ${JSON.stringify(
    removeEmptyFields({
      question: data.question,
      answer: data.answer,
      options: data.options?.length > 0 ? data.options : undefined,
      note: data.note.length > 0 ? data.note : undefined
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

async function translateAndAddProperty(
  objectLiteral: any,
  questionData: {
    question: string;
    answer: string;
    options: string[];
    note: string;
  },
  language: 'en' | 'ru',
  targetLanguage: 'English' | 'Russian'
): Promise<void> {
  console.log(`Translating question to ${targetLanguage}...`);

  const translated: {
    question: string;
    answer: string;
    options?: string[];
    note?: string;
  } = await translateText(schema, questionData, targetLanguage);

  if (translated.note === '') {
    delete translated.note;
  }

  if (translated.options?.length === 0) {
    delete translated.options;
  }

  objectLiteral.addPropertyAssignment({
    name: language,
    initializer: Writers.object(
      removeEmptyFields({
        question: (writer) => writer.quote(translated.question),
        answer: (writer) => writer.quote(translated.answer),
        options: translated.options
          ? (writer) =>
              writer.write(JSON.stringify(translated.options, null, 2))
          : undefined,
        note: translated.note
          ? (writer) => writer.quote(translated.note ?? '')
          : undefined
      })
    )
  });

  console.log(`✓ Added ${targetLanguage} translation`);
}

async function addEnglishTranslation(filePath: string): Promise<void> {
  try {
    const project = new Project({
      manipulationSettings: {
        quoteKind: QuoteKind.Single
      }
    });
    const sourceFile = project.addSourceFileAtPath(filePath);

    const exportedDeclarations = sourceFile.getExportedDeclarations();

    // Check if English translation already exists
    const questionObject = exportedDeclarations
      .get('question')?.[0]
      ?.getChildrenOfKind(SyntaxKind.ObjectLiteralExpression)?.[0];
    if (!questionObject) {
      console.log(`Skipping ${filePath} - no question export found`);
      return;
    }

    const objectLiteral = questionObject.asKind(
      SyntaxKind.ObjectLiteralExpression
    );
    if (!objectLiteral) {
      console.log(`Skipping ${filePath} - could not get object literal`);
      return;
    }

    // Check if English translation already exists
    const existingEn = objectLiteral.getProperty('en');
    const existingRu = objectLiteral.getProperty('ru');

    if (existingEn && existingRu) {
      console.log(
        `Skipping ${filePath} - already has both English and Russian translations`
      );
      return;
    }

    // Extract question data
    const questionProp = objectLiteral.getProperty('question');
    const answerProp = objectLiteral.getProperty('answer');
    const optionsProp = objectLiteral.getProperty('options');
    const noteProp = objectLiteral.getProperty('note');

    if (!questionProp || !answerProp) {
      console.log(`Skipping ${filePath} - missing question or answer`);
      return;
    }

    const questionText = questionProp
      .getFirstDescendantByKind(SyntaxKind.StringLiteral)
      ?.getLiteralValue() as string;
    const answerText = answerProp
      .getFirstDescendantByKind(SyntaxKind.StringLiteral)
      ?.getLiteralValue() as string;

    if (!questionText || !answerText) {
      console.log(
        `Skipping ${filePath} - could not extract question or answer text`
      );
      return;
    }

    const options =
      optionsProp
        ?.getFirstDescendantByKind(SyntaxKind.ArrayLiteralExpression)
        ?.getElements()
        .map((element) =>
          element.asKind(SyntaxKind.StringLiteral)?.getLiteralText()
        )
        .filter((x) => x !== undefined) ?? [];

    // Extract note if it exists
    let noteText: string | undefined;
    if (noteProp) {
      noteText = noteProp
        .getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getLiteralValue() as string;
    }

    const questionData = {
      question: questionText,
      answer: answerText,
      options,
      note: noteText ?? ''
    };

    console.log(`Processing ${filePath}...`);

    // Translate to English if not exists
    if (!existingEn) {
      await translateAndAddProperty(
        objectLiteral,
        questionData,
        'en',
        'English'
      );
    }

    // Translate to Russian if not exists
    if (!existingRu) {
      await translateAndAddProperty(
        objectLiteral,
        questionData,
        'ru',
        'Russian'
      );
    }

    sourceFile.formatText({
      indentSize: 2,
      convertTabsToSpaces: true,
      ensureNewLineAtEndOfFile: true,
      semicolons: ts.SemicolonPreference.Insert,
      tabSize: 2
    });

    // Save the file
    sourceFile.saveSync();
    console.log(`✓ Completed processing ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

async function processDirectory(dirPath: string): Promise<void> {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (file.endsWith('.ts') && !file.endsWith('.d.ts')) {
      await addEnglishTranslation(filePath);
      // Add a small delay to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
}

async function main(): Promise<void> {
  if (!process.env.OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY environment variable is required');
    process.exit(1);
  }

  const questionsDataPath = path.join(
    __dirname,
    'src',
    'stores',
    'questions-data'
  );
  console.log(`Processing questions in: ${questionsDataPath}`);

  if (fs.existsSync(questionsDataPath)) {
    await processDirectory(questionsDataPath);
    console.log('Finished processing all question files');
  } else {
    console.error('Questions data directory not found');
  }
}

main().catch(console.error);

function removeEmptyFields<T extends Record<string, unknown>>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== undefined)
  ) as unknown as T;
}
