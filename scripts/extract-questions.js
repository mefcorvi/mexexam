/* eslint-env node */
import { Project, SyntaxKind } from 'ts-morph';
import fs from 'fs';
import path from 'path';

/**
 * Extracts questions from a TypeScript file and creates individual files
 * @param {string} sourceFilePath - Path to the source TypeScript file
 * @param {string} outputDir - Directory to create individual question files
 */
function extractQuestions(sourceFilePath, outputDir) {
  // Initialize ts-morph project
  const project = new Project({
    tsConfigFilePath: 'tsconfig.json'
  });

  // Add the source file to the project
  const sourceFile = project.addSourceFileAtPath(sourceFilePath);
  const exportedDeclarations = sourceFile.getExportedDeclarations();

  // Find the questions array export
  const questionsExport = exportedDeclarations.get('questions');

  if (!questionsExport) {
    console.error('No questions export found in the file');
    return;
  }

  // Get the questions array
  const questionsVariable = sourceFile.getVariableDeclaration('questions');
  if (!questionsVariable) {
    console.error('No questions variable found in the file');
    return;
  }

  const questionsArray = questionsVariable.getInitializer();
  if (
    !questionsArray ||
    !questionsArray.isKind(SyntaxKind.ArrayLiteralExpression)
  ) {
    console.error('Questions variable is not an array');
    return;
  }

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Extract each question
  const questions = questionsArray.getElements();
  console.log(`Found ${questions.length} questions in ${sourceFilePath}`);

  questions.forEach((questionElement, index) => {
    if (!questionElement.isKind(SyntaxKind.ObjectLiteralExpression)) {
      console.warn(`Question ${index} is not an object literal, skipping`);
      return;
    }

    // Extract the id property
    const idProperty = questionElement.getProperty('id');
    if (!idProperty || !idProperty.isKind(SyntaxKind.PropertyAssignment)) {
      console.warn(`Question ${index} has no id property, skipping`);
      return;
    }

    const idValue = idProperty.getInitializer();
    if (!idValue || !idValue.isKind(SyntaxKind.StringLiteral)) {
      console.warn(`Question ${index} has no string id, skipping`);
      return;
    }

    const questionId = idValue.getLiteralValue();

    // Create the individual question file content
    const questionFileContent = `import type { QuestionData } from '../../interfaces';

export const question: QuestionData = ${questionElement.getText()};
`;

    // Write the individual question file
    const questionFilePath = path.join(outputDir, `${questionId}.ts`);
    fs.writeFileSync(questionFilePath, questionFileContent);
    console.log(`Created: ${questionFilePath}`);
  });

  // Update the source file to use dynamic imports
  const updatedSourceContent = `import type { QuestionData } from '../interfaces';

const modules = import.meta.glob('./${path.basename(outputDir)}/*.ts', { eager: true });

export const questions: QuestionData[] = Object.values(modules).map(
  (module) => (module as { question: QuestionData }).question
);
`;

  fs.writeFileSync(sourceFilePath, updatedSourceContent);
  console.log(`Updated source file: ${sourceFilePath}`);
}

// Command line usage
const args = process.argv.slice(2);

if (args.length < 1) {
  console.log('Usage: node extract-questions.js <section>');
  console.log('Example: node extract-questions.js art-paint-cinema');
  process.exit(1);
}

const [section] = args;

const sourceFile = `src/stores/questions-data/${section}.ts`;
const outputDir = `src/stores/questions-data/${section}`;

if (!fs.existsSync(sourceFile)) {
  console.error(`Source file not found: ${sourceFile}`);
  process.exit(1);
}

try {
  extractQuestions(sourceFile, outputDir);
  console.log('Question extraction completed successfully!');
} catch (error) {
  console.error('Error extracting questions:', error);
  process.exit(1);
}
