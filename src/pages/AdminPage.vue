<template>
  <GeneralPage :class="$style.page" :title="title">
    <div :class="$style.fileControls">
      <button @click="loadFromFile" :class="$style.btnPrimary">Load JSON File</button>
      <button @click="saveToFile" :disabled="!dataLoaded"
        :class="[$style.btnSuccess, { [$style.disabled]: !dataLoaded }]">Save JSON File</button>
      <button @click="createNewDataset" :class="$style.btnSecondary">New Dataset</button>
    </div>

    <div v-if="!dataLoaded" :class="$style.emptyState">
      <p>Please load a JSON file or create a new dataset to begin managing questions.</p>
    </div>

    <div v-else :class="$style.adminContent">
      <!-- Dataset Metadata -->
      <div :class="$style.section">
        <h2>Dataset Information</h2>
        <div :class="$style.formGroup">
          <label>Dataset ID:</label>
          <input v-model="dataset.id" type="text" :class="$style.formControl">
        </div>
        <div :class="$style.formGroup">
          <label>Title:</label>
          <div :class="$style.multilangInput">
            <div v-for="lang in languages" :key="lang" :class="$style.langGroup">
              <span :class="$style.langLabel">{{ lang.toUpperCase() }}</span>
              <input v-model="dataset.title[lang]" type="text" :class="$style.formControl"
                :placeholder="`Title in ${lang.toUpperCase()}`" />
            </div>
          </div>
        </div>
      </div>

      <!-- Sections Management -->
      <div :class="$style.section">
        <div :class="$style.sectionHeader">
          <h2>Sections ({{ dataset.sections.length }})</h2>
          <button @click="addSection" :class="$style.btnPrimary">Add Section</button>
        </div>

        <div :class="$style.sectionsList">
          <div v-for="(section, sectionIndex) in dataset.sections" :key="section.id" :class="$style.sectionCard">
            <div :class="$style.sectionCardHeader" @click="toggleSectionExpanded(sectionIndex)">
              <h3>{{ section.title[locale] || 'Unnamed Section' }}</h3>
              <div v-if="expandedSections.has(sectionIndex)">
                <input v-model="section.id" type="text" :class="$style.formControl">
              </div>
              <div :class="$style.sectionActions">
                <button @click.stop="deleteSection(sectionIndex)" :class="$style.btnDanger">Delete</button>
              </div>
            </div>

            <div v-if="expandedSections.has(sectionIndex)" :class="$style.sectionDetails">
              <!-- Section Metadata -->

              <div :class="$style.formGroup">
                <div :class="$style.multilangInput">
                  <div v-for="lang in languages" :key="lang" :class="$style.langGroup">
                    <span :class="$style.langLabel">{{ lang.toUpperCase() }}</span>
                    <input v-model="section.title[lang]" type="text" :class="$style.formControl"
                      :placeholder="`Section title in ${lang.toUpperCase()}`" />
                  </div>
                </div>
              </div>

              <!-- Questions in Section -->
              <div :class="$style.questionsSection">
                <div :class="$style.questionsHeader">
                  <h4>Questions ({{ section.questions.length }})</h4>
                  <button @click="addQuestion(sectionIndex)" :class="$style.btnPrimary">Add Question</button>
                </div>

                <div :class="$style.questionsList">
                  <div v-for="(question, questionIndex) in section.questions" :key="question.id"
                    :class="$style.questionCard">
                    <div :class="$style.questionHeader" @click="toggleQuestionExpanded(sectionIndex, questionIndex)">
                      <span :class="$style.questionTitle">
                        {{ question.question[locale] || 'Unnamed Question' }}
                        <small>{{ question.note[locale] || 'No note' }}</small>
                      </span>
                      <div :class="$style.questionActions">
                        <button @click.stop="deleteQuestion(sectionIndex, questionIndex)"
                          :class="[$style.btnDanger, $style.btnSm]">
                          Delete
                        </button>
                      </div>
                    </div>

                    <div v-if="expandedQuestions.has(`${sectionIndex}-${questionIndex}`)"
                      :class="$style.questionDetails">
                      <!-- Question Metadata -->
                      <div :class="$style.formGroup">
                        <label>Question ID:</label>
                        <input v-model="question.id" type="text" :class="$style.formControl">
                      </div>

                      <div :class="$style.formGroup">
                        <label>Type:</label>
                        <select v-model="question.type" :class="$style.formControl">
                          <option value="choice">Multiple Choice</option>
                          <option value="text">Text/Essay</option>
                        </select>
                      </div>

                      <!-- Question Text -->
                      <div :class="$style.formGroup">
                        <label>Question:</label>
                        <div :class="$style.multilangInput">
                          <div v-for="lang in languages" :key="lang" :class="$style.langGroup">
                            <span :class="$style.langLabel">{{ lang.toUpperCase() }}</span>
                            <textarea v-model="question.question[lang]" :class="$style.formControl"
                              :placeholder="`Question text in ${lang.toUpperCase()}`" rows="2" />
                          </div>
                        </div>
                      </div>

                      <!-- Answer -->
                      <div :class="$style.formGroup">
                        <label>Answer:</label>
                        <div :class="$style.multilangInput">
                          <div v-for="lang in languages" :key="lang" :class="$style.langGroup">
                            <span :class="$style.langLabel">{{ lang.toUpperCase() }}</span>
                            <textarea v-model="question.answer[lang]" :class="$style.formControl"
                              :placeholder="`Answer in ${lang.toUpperCase()}`" rows="3" />
                          </div>
                        </div>
                      </div>

                      <!-- Options (for multiple choice) -->
                      <div v-if="question.type === 'choice'" :class="$style.formGroup">
                        <div :class="$style.optionsHeader">
                          <label>Options:</label>
                          <button @click="addOption(question)" :class="[$style.btnSecondary, $style.btnSm]">Add
                            Option</button>
                        </div>

                        <div v-for="(option, optionIndex) in question.options" :key="optionIndex"
                          :class="$style.optionGroup">
                          <div :class="$style.optionHeader">
                            <span>Option {{ optionIndex + 1 }}</span>
                            <button @click="removeOption(question, optionIndex)"
                              :class="[$style.btnDanger, $style.btnXs]">
                              ×
                            </button>
                          </div>
                          <div :class="$style.multilangInput">
                            <div v-for="lang in languages" :key="lang" :class="$style.langGroup">
                              <span :class="$style.langLabel">{{ lang.toUpperCase() }}</span>
                              <input v-model="option[lang]" type="text" :class="$style.formControl"
                                :placeholder="`Option ${optionIndex + 1} in ${lang.toUpperCase()}`" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Note -->
                      <div :class="$style.formGroup">
                        <label>Note/Explanation:</label>
                        <div :class="$style.multilangInput">
                          <div v-for="lang in languages" :key="lang" :class="$style.langGroup">
                            <span :class="$style.langLabel">{{ lang.toUpperCase() }}</span>
                            <textarea v-model="question.note[lang]" :class="$style.formControl"
                              :placeholder="`Note/explanation in ${lang.toUpperCase()}`" rows="8" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Status Messages -->
    <div v-if="statusMessage" :class="[$style.statusMessage, $style[statusType]]">
      {{ statusMessage }}
    </div>
  </GeneralPage>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import GeneralPage from '@/components/GeneralPage.vue';
import { useLocalization } from '@/stores/localization';

const title = 'Admin Panel';

interface LocalizedText {
  es: string;
  en: string;
  ru: string;
  zh: string;
}

interface Option {
  es: string;
  en: string;
  ru: string;
  zh: string;
}

interface Question {
  id: string;
  type: 'choice' | 'text';
  question: LocalizedText;
  answer: LocalizedText;
  options: Option[];
  note: LocalizedText;
}

interface Section {
  id: string;
  title: LocalizedText;
  questions: Question[];
}

interface Dataset {
  id: string;
  title: LocalizedText;
  sections: Section[];
}

const dataset = reactive<Dataset>({
  id: '',
  title: { es: '', en: '', ru: '', zh: '' },
  sections: []
});

const { locale } = useLocalization();

const dataLoaded = ref(false);
const expandedSections = ref(new Set<number>());
const expandedQuestions = ref(new Set<string>());
const statusMessage = ref('');
const statusType = ref<'success' | 'error' | 'info'>('info');

const languages = ['es', 'en', 'ru', 'zh'] as const;

const loadFromFile = async () => {
  try {
    if (!('showOpenFilePicker' in window)) {
      alert('File System Access API is not supported in this browser. Please use Chrome or Edge.');
      return;
    }

    const [fileHandle] = await (window as any).showOpenFilePicker({
      types: [{
        description: 'JSON files',
        accept: { 'application/json': ['.json'] }
      }]
    });

    const file = await fileHandle.getFile();
    const text = await file.text();
    const data = JSON.parse(text);

    Object.assign(dataset, data);
    dataLoaded.value = true;

    showStatus('File loaded successfully!', 'success');
  } catch (error: any) {
    console.error('Error loading file:', error);
    if (error.name !== 'AbortError') {
      showStatus(`Error loading file: ${error.message}`, 'error');
    }
  }
};

const saveToFile = async () => {
  try {
    if (!('showSaveFilePicker' in window)) {
      alert('File System Access API is not supported in this browser. Please use Chrome or Edge.');
      return;
    }

    const fileHandle = await (window as any).showSaveFilePicker({
      suggestedName: `${dataset.id || 'questions'}.json`,
      types: [{
        description: 'JSON files',
        accept: { 'application/json': ['.json'] }
      }]
    });

    const writable = await fileHandle.createWritable();
    await writable.write(JSON.stringify(dataset, null, 2));
    await writable.close();

    showStatus('File saved successfully!', 'success');
  } catch (error: any) {
    console.error('Error saving file:', error);
    if (error.name !== 'AbortError') {
      showStatus(`Error saving file: ${error.message}`, 'error');
    }
  }
};

const createNewDataset = () => {
  Object.assign(dataset, {
    id: 'new-dataset',
    title: { es: '', en: '', ru: '', zh: '' },
    sections: []
  });
  dataLoaded.value = true;
  expandedSections.value.clear();
  expandedQuestions.value.clear();
  showStatus('New dataset created', 'info');
};

const addSection = () => {
  const newSection: Section = {
    id: generateId(),
    title: { es: '', en: '', ru: '', zh: '' },
    questions: []
  };
  dataset.sections.push(newSection);
  expandedSections.value.add(dataset.sections.length - 1);
};

const deleteSection = (index: number) => {
  if (confirm('Are you sure you want to delete this section and all its questions?')) {
    dataset.sections.splice(index, 1);
    expandedSections.value.delete(index);
    const newExpanded = new Set<number>();
    expandedSections.value.forEach(i => {
      if (i < index) newExpanded.add(i);
      else if (i > index) newExpanded.add(i - 1);
    });
    expandedSections.value = newExpanded;
  }
};

const toggleSectionExpanded = (index: number) => {
  if (expandedSections.value.has(index)) {
    expandedSections.value.delete(index);
  } else {
    expandedSections.value.add(index);
  }
};

const addQuestion = (sectionIndex: number) => {
  const newQuestion: Question = {
    id: generateId(),
    type: 'choice',
    question: { es: '', en: '', ru: '', zh: '' },
    answer: { es: '', en: '', ru: '', zh: '' },
    options: [],
    note: { es: '', en: '', ru: '', zh: '' }
  };
  dataset.sections[sectionIndex].questions.push(newQuestion);
  const questionIndex = dataset.sections[sectionIndex].questions.length - 1;
  expandedQuestions.value.add(`${sectionIndex}-${questionIndex}`);
};

const deleteQuestion = (sectionIndex: number, questionIndex: number) => {
  if (confirm('Are you sure you want to delete this question?')) {
    dataset.sections[sectionIndex].questions.splice(questionIndex, 1);
    expandedQuestions.value.delete(`${sectionIndex}-${questionIndex}`);
  }
};

const toggleQuestionExpanded = (sectionIndex: number, questionIndex: number) => {
  const key = `${sectionIndex}-${questionIndex}`;
  if (expandedQuestions.value.has(key)) {
    expandedQuestions.value.delete(key);
  } else {
    expandedQuestions.value.add(key);
  }
};

const addOption = (question: Question) => {
  question.options.push({ es: '', en: '', ru: '', zh: '' });
};

const removeOption = (question: Question, index: number) => {
  question.options.splice(index, 1);
};

const generateId = () => {
  return Math.random().toString(36).substring(2, 8);
};

const showStatus = (message: string, type: 'success' | 'error' | 'info') => {
  statusMessage.value = message;
  statusType.value = type;
  setTimeout(() => {
    statusMessage.value = '';
  }, 3000);
};
</script>

<style module lang="less">
.page {
  width: 100%;

  button {
    padding: 8px 12px;

    font-size: 14px;
  }
}

.adminContent {
  width: 100%;
}

.fileControls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  margin-bottom: 30px;
  padding-bottom: 20px;

  border-bottom: 2px solid #e0e0e0;
}

.btnPrimary {
  color: white;

  background-color: #007bff;

  &:hover {
    background-color: #0056b3;
  }
}

.btnSecondary {
  color: white;

  background-color: #6c757d;

  &:hover {
    background-color: #545b62;
  }
}

.btnSuccess {
  color: white;

  background-color: #28a745;

  &:hover {
    background-color: #1e7e34;
  }

  &.disabled {
    background-color: #ccc;

    cursor: not-allowed;
  }
}

.btnDanger {
  color: white;

  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
}

.btnSm {
  padding: 6px 12px;

  font-size: 12px;
}

.btnXs {
  padding: 4px 8px;

  font-size: 10px;
}

.emptyState {
  padding: 60px 20px;

  font-size: 18px;
  text-align: center;
  color: #666;
}

.section,
.sectionsList {
  margin-bottom: 40px;
}

.formGroup {
  margin-bottom: 20px;
}

.formGroup label {
  display: block;

  margin-bottom: 5px;

  font-weight: 600;
  color: #333;
}

.formControl {
  width: 100%;
  padding: 8px 12px;

  font-size: 14px;

  border: 1px solid #ddd;
  border-radius: 4px;
}

.multilangInput {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
}

.langGroup {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.langLabel {
  font-size: 12px;
  font-weight: 600;
  color: #666;
}

.sectionHeader,
.questionsHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
}

.sectionCard {
  margin-bottom: 8px;
  overflow: hidden;

  border: 1px solid #ddd;
  border-radius: 8px;
}

.sectionCardHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px 12px;

  background: #def1fb;
  border-bottom: 1px solid #ddd;

  gap: 8px;

  h3 {
    font-size: 14px;
    font-weight: 600;
  }
}

.sectionActions {
  display: flex;
  gap: 8px;

  flex-grow: 1;
  justify-content: flex-end;
}

.sectionDetails {
  padding: 20px;
}

.questionCard {
  margin-bottom: 15px;
  overflow: hidden;

  border: 1px solid #e0e0e0;
  border-radius: 6px;
}

.questionHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 15px;

  background: #f1f3f4;
  border-bottom: 1px solid #e0e0e0;
}

.questionTitle {
  font-weight: 500;
  color: #333;

  small {
    display: block;

    max-width: 800px;

    font-size: 14px;
  }
}

.questionActions {
  display: flex;
  gap: 8px;
}

.questionDetails {
  padding: 15px;
}

.optionsHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
}

.optionGroup {
  margin-bottom: 10px;
  padding: 10px;

  border: 1px solid #e9ecef;
  border-radius: 4px;
}

.optionHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
}

.statusMessage {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;

  padding: 15px 20px;

  font-weight: 500;

  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &.success {
    color: #155724;

    background-color: #d4edda;
    border: 1px solid #c3e6cb;
  }

  &.error {
    color: #721c24;

    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
  }

  &.info {
    color: #0c5460;

    background-color: #d1ecf1;
    border: 1px solid #bee5eb;
  }
}
</style>
