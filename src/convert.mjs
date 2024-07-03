import { readFileSync } from 'fs';

const data = JSON.parse(readFileSync('./stores/questions-init.json', 'utf8'));

for (const section of data.sections) {
  section.title = section.section.trim();
  section.ru = {
    title: section['section.ru'] ?? ''
  };

  delete section.section;
  delete section['section.ru'];

  for (let i = 0; i < section.data.length; i++) {
    const id = Math.random().toString(36).substring(7);
    const item = section.data[i];
    const question = item.question.question;
    const note = item.question.note;
    let answer = item.question.answer;

    if (!answer && item.options) {
      answer = item.options;
      item.options = undefined;
    }

    if (Array.isArray(answer)) {
      answer = answer.join('\n').trim();
    }

    section.data[i] = {
      id,
      type: item.options?.length ? 'choise' : 'text',
      question: question.trim(),
      answer: answer.trim(),
      options: item.options,
      note: note?.trim(),
      ru: {}
    };

    if (item.question['question.ru']) {
      section.data[i].ru.question = item.question['question.ru'].trim();
    }

    if (item.question['answer.ru']) {
      section.data[i].ru.answer = item.question['answer.ru'];

      if (Array.isArray(section.data[i].ru.answer)) {
        section.data[i].ru.answer = section.data[i].ru.answer.join('\n').trim();
      }
    }

    if (item['options.ru']) {
      section.data[i].ru.options = item['options.ru'];
    }

    if (item.question['note.ru']) {
      section.data[i].ru.note = item.question['note.ru'];
    }
  }

  section.questions = section.data;
  delete section.data;
}

console.log(JSON.stringify(data, null, 2));
