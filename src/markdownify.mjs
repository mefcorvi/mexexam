import { readFileSync } from 'fs';

const data = JSON.parse(readFileSync('./stores/questions.json', 'utf8'));

let questionIndex = 1;

for (const section of data.sections) {
  console.log(`## ${section.section}`);

  for (const item of section.data) {
    const question = item.question.question;
    let answer = item.question.answer;

    if (!answer && item.options) {
      answer = item.options;
      item.options = undefined;
    }

    console.log(`### ${questionIndex}. ${question}`);
    questionIndex++;

    if (answer) {
      if (Array.isArray(answer)) {
        for (const ans of answer) {
          console.log(`✅ ${ans}`);
        }
      } else {
        console.log(`✅ ${answer}`);
      }
    }

    if (item.options) {
      for (const option of item.options) {
        console.log(`❌ ${option}`);
        // unicode checkmark: ✓
      }
    }

    console.log('');
  }
}
