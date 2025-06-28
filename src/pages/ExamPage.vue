<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import GeneralPage from '@/components/GeneralPage.vue';
import GeneralButton from '@/components/GeneralButton.vue';
import { useExamStore } from '@/stores/exam';
import { useTranslations } from '@/stores/translations';
import { useLocalization } from '@/stores/localization';
import { RouteName } from '@/router/names';

const $router = useRouter();
const $route = useRoute();
const translations = useTranslations();
const { locale } = useLocalization();

const {
  examQuestions,
  isExamStarted,
  isExamFinished,
  examResults,
  startExam,
  selectAnswer,
  getSelectedAnswer,
  finishExam,
  resetExam,
  getRandomizedOptions,
  getAnswerById,
  formattedTimeRemaining,
  isTimeRunningOut,
  isAllQuestionsAnswered
} = useExamStore();

const sectionId = computed(() => $route.params.sectionId as string | undefined);
const questionRefs = ref<Map<string, HTMLElement>>(new Map());
const isCheckingUnanswered = ref(false);

onMounted(async () => {
  if (!isExamStarted.value) {
    await startExam(sectionId.value);
  }
});

const onOptionSelect = (questionId: string, optionId: number) => {
  selectAnswer(questionId, optionId);
  // Clear the checking state when user selects an answer
  isCheckingUnanswered.value = false;
};

const findFirstUnansweredQuestion = () => {
  for (const question of examQuestions.value) {
    if (getSelectedAnswer(question.id) === null) {
      return question.id;
    }
  }
  return null;
};

const scrollToQuestion = (questionId: string) => {
  const questionElement = questionRefs.value.get(questionId);
  if (questionElement) {
    questionElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }
};

const onFinishExam = () => {
  if (isAllQuestionsAnswered.value) {
    finishExam();
    window.scrollTo(0, 0);
  } else {
    isCheckingUnanswered.value = true;
    const firstUnansweredId = findFirstUnansweredQuestion();
    if (firstUnansweredId) {
      scrollToQuestion(firstUnansweredId);
    }
  }
};

const onStartNewExam = async () => {
  resetExam();
  window.scrollTo(0, 0);
  await startExam(sectionId.value);
};

const onGoHome = () => {
  resetExam();
  $router.push({ name: RouteName.Home });
};

const t = (key: string) => {
  return translations.t(locale.value, key);
};

const getQuestionClass = (questionId: string) => {
  if (!isExamFinished.value) return '';

  const answer = getAnswerById(questionId);
  if (!answer) return '';

  return answer.isCorrect ? 'correct' : 'wrong';
};

const getOptionClass = (questionId: string, optionId: number) => {
  if (!isExamFinished.value) return '';

  const answer = getAnswerById(questionId);
  if (!answer) return '';

  const question = examQuestions.value.find(q => q.id === questionId);
  const option = question?.options?.find(opt => opt.id === optionId);

  if (!option) return '';

  if (option.isAnswer) {
    return 'correct-answer';
  }

  if (answer.selectedOptionId === optionId && !answer.isCorrect) {
    return 'wrong-answer';
  }

  return '';
};

const setQuestionRef = (questionId: string, element: HTMLElement | null) => {
  if (element) {
    questionRefs.value.set(questionId, element);
  } else {
    questionRefs.value.delete(questionId);
  }
};

const isQuestionUnanswered = (questionId: string) => {
  return getSelectedAnswer(questionId) === null;
};
</script>

<template>
  <GeneralPage>
    <template #topBar>
      <div class="exam-header">
        <div v-if="isExamStarted && !isExamFinished" :class="['timer', { 'time-running-out': isTimeRunningOut }]"
          :title="isTimeRunningOut ? t('Time is running out!') : t('Time remaining')">
          {{ formattedTimeRemaining }}
        </div>
      </div>
    </template>

    <div v-if="!isExamStarted" class="loading">
      {{ t('Loading exam...') }}
    </div>

    <div v-else-if="!isExamFinished" class="exam-content">
      <div class="questions-list">
        <div v-for="(question, index) in examQuestions" :key="question.id" :class="[
          'question-item',
          getQuestionClass(question.id),
          { 'unanswered-highlight': isCheckingUnanswered && isQuestionUnanswered(question.id) }
        ]" :ref="(el) => setQuestionRef(question.id, el as HTMLElement)">
          <div class="question-header">
            <span class="question-number">{{ index + 1 }}.</span>
            <span class="question-text">{{ question.question }}</span>
          </div>

          <div class="options-list">
            <label v-for="option in getRandomizedOptions(question)" :key="option.id"
              :class="['option-item', getOptionClass(question.id, option.id)]">
              <input type="radio" :name="`question-${question.id}`" :value="option.id"
                :checked="getSelectedAnswer(question.id) === option.id" @change="onOptionSelect(question.id, option.id)"
                :disabled="isExamFinished" />
              <span class="option-text">{{ option.value }}</span>
            </label>
          </div>
        </div>
      </div>

      <div class="finish-section">
        <GeneralButton @click="onFinishExam" class="finish-button">
          {{ isAllQuestionsAnswered ? t('Finish Exam') : t('Check Unanswered Questions') }}
        </GeneralButton>
      </div>
    </div>

    <div v-else class="results-content">
      <div class="results-header">
        <h2>{{ t('Exam Results') }}</h2>
        <div class="results-summary">
          <div class="result-item correct">
            <span class="result-label">{{ t('Correct') }}</span>
            <span class="result-value">{{ examResults?.correctAnswers }}</span>
          </div>
          <div class="result-item wrong">
            <span class="result-label">{{ t('Wrong') }}</span>
            <span class="result-value">{{ examResults?.wrongAnswers }}</span>
          </div>
          <div class="result-item total">
            <span class="result-label">{{ t('Total') }}</span>
            <span class="result-value">{{ examResults?.totalQuestions }}</span>
          </div>
          <div class="result-item percentage">
            <span class="result-label">{{ t('Score') }}</span>
            <span class="result-value">{{ examResults?.percentage }}%</span>
          </div>
        </div>
      </div>

      <div class="results-questions">
        <div v-for="(question, index) in examQuestions" :key="question.id"
          :class="['result-question', getQuestionClass(question.id)]">
          <div class="question-header">
            <span class="question-number">{{ index + 1 }}.</span>
            <span class="question-text">{{ question.question }}</span>
            <span :class="['result-indicator', getAnswerById(question.id)?.isCorrect ? 'correct' : 'wrong']">
              {{ getAnswerById(question.id)?.isCorrect ? '✓' : '✗' }}
            </span>
          </div>

          <div class="options-list">
            <div v-for="option in getRandomizedOptions(question)" :key="option.id"
              :class="['option-item', getOptionClass(question.id, option.id)]">
              <span class="option-text">{{ option.value }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="actions">
        <GeneralButton @click="onStartNewExam" class="new-exam-button">
          {{ t('Start New Exam') }}
        </GeneralButton>
        <GeneralButton @click="onGoHome" class="home-button">
          {{ t('Go Home') }}
        </GeneralButton>
      </div>
    </div>
  </GeneralPage>
</template>

<style scoped lang="less">
.exam-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: var(--gap);
}

.exam-title {
  font-size: var(--font-size-3);
  font-weight: 600;
}

.timer {
  padding: var(--gap-s) var(--gap);

  font-size: var(--font-size-2);
  font-weight: 600;
  color: var(--text-color);

  background: var(--secondary-color-20);
  border-radius: var(--border-radius);

  transition: all 0.3s ease;

  &.time-running-out {
    color: var(--error-text-color);

    background: var(--error-bg-color);

    animation: pulse 1s infinite;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100vh - var(--gap-l));

  font-size: var(--font-size-2);
}

.exam-content {
  display: flex;
  flex: 1;
  flex-direction: column;

  margin-top: var(--gap-l);
  padding: var(--gap);
}

.questions-list {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: var(--gap);
}

.question-item {
  max-width: 600px;
  padding: var(--gap);

  background: var(--negative-color-alpha-5);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);

  backdrop-filter: blur(30px);
  transition: all 0.2s ease;

  &.correct {
    background: var(--success-bg-color-alpha-10);
    border-color: var(--success-color);
  }

  &.wrong {
    background: var(--error-bg-color-alpha-10);
    border-color: var(--error-color);
  }

  &.unanswered-highlight {
    background: var(--warning-bg-color-alpha-10);
    border-color: var(--warning-color);
    box-shadow: 0 0 0 2px var(--warning-color-20);

    animation: pulse-warning 1.5s ease-in-out;
  }
}

@keyframes pulse-warning {
  0% {
    box-shadow: 0 0 0 2px var(--warning-color-20);
  }

  50% {
    box-shadow: 0 0 0 4px var(--warning-color-40);
  }

  100% {
    box-shadow: 0 0 0 2px var(--warning-color-20);
  }
}

.question-header {
  display: flex;
  align-items: baseline;

  margin-bottom: var(--gap-s);

  font-weight: 500;
  gap: var(--gap-s);
}

.question-number {
  width: 16px;

  font-weight: 600;
  text-align: right;
  color: var(--secondary-color)
}

.question-text {
  flex: 1;

  font-size: var(--font-size-2);
  line-height: 1.4;
  font-weight: 500;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: var(--gap-s);
}

.option-item {
  display: flex;
  align-items: center;

  margin-right: -12px;
  margin-left: -12px;
  padding: var(--gap-s);

  line-height: 120%;

  border-radius: var(--border-radius);

  cursor: pointer;
  transition: all 0.2s ease;
  gap: var(--gap-s);

  .onHover({
    background: var(--secondary-color-10);
  });

input[type="radio"] {
  position: relative;

  width: 20px;
  height: 20px;
  margin: 0;

  background: var(--bg-color);
  border: 2px solid var(--border-color);
  border-radius: 50%;

  cursor: pointer;
  transition: all 0.2s ease;

  appearance: none;

  &:checked {
    background: var(--main-color);
    border-color: var(--main-color);

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;

      width: 17px;
      height: 17px;

      background: var(--main-color);
      border: 2px solid var(--bg-color);
      border-radius: 50%;

      transform: translate(-50%, -50%);
    }
  }

  .onHover({
    box-shadow: 0 0 0 3px var(--primary-color-20);
  });

&:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--primary-color-20);
}
}

.option-text {
  flex: 1;

  font-size: var(--font-size-1);
}

&.correct-answer {
  color: var(--success-text-color);

  background: var(--success-bg-color);

  input[type="radio"] {
    background: var(--success-color);
    border-color: var(--success-color);

    &:checked::after {
      background: var(--success-bg-color);
    }
  }
}

&.wrong-answer {
  color: var(--error-text-color);

  background: var(--error-bg-color);

  input[type="radio"] {
    background: var(--error-color);
    border-color: var(--error-color);

    &:checked::after {
      background: var(--error-bg-color);
    }
  }
}
}

.finish-section {
  display: flex;
  justify-content: center;

  padding-top: var(--gap);
}

.finish-button {
  padding: var(--gap) var(--gap-l);

  font-size: var(--font-size-2);
}

.results-content {
  display: flex;
  flex: 1;
  flex-direction: column;

  margin-top: var(--gap-l);
  padding: var(--gap);
}

.results-header {
  margin-bottom: var(--gap);

  text-align: center;

  h2 {
    margin-bottom: var(--gap);

    font-size: var(--font-size-4);
    color: var(--text-color);
  }
}

.results-summary {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--gap-s);
}

.result-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: var(--gap-s) var(--gap);

  border-radius: var(--border-radius);

  backdrop-filter: blur(5px);

  &.correct {
    color: var(--success-text-color);

    background: var(--success-bg-color);
  }

  &.wrong {
    color: var(--error-text-color);

    background: var(--error-bg-color);
  }

  &.total {
    color: var(--text-color);

    background: var(--secondary-color-20);
  }

  &.percentage {
    color: var(--primary-color);

    background: var(--primary-color-20);
    border: 1px solid var(--border-color);
  }
}

.result-label {
  font-size: var(--font-size-a1);
  font-weight: 500;
}

.result-value {
  font-size: var(--font-size-3);
  font-weight: 600;
}

.results-questions {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: var(--gap);

  max-width: 600px;
}

.result-question {
  padding: var(--gap);

  background: var(--bg-color);
  border-radius: var(--border-radius);

  backdrop-filter: blur(10px);
  transition: all 0.2s ease;

  &.correct {
    background: var(--success-bg-color-alpha-10);
    border-color: var(--success-color);
  }

  &.wrong {
    background: var(--error-bg-color-alpha-10);
    border-color: var(--error-color);
  }

  .option-item {
    cursor: default;
  }

  .option-item:not(.correct-answer):not(.wrong-answer):hover {
    background: unset;
  }
}

.result-indicator {
  margin-left: auto;

  font-size: var(--font-size-2);
  font-weight: 600;

  &.correct {
    color: var(--success-color);
  }

  &.wrong {
    color: var(--error-color);
  }
}

.actions {
  display: flex;
  justify-content: center;

  padding-top: var(--gap);

  gap: var(--gap);
}

.new-exam-button,
.home-button {
  padding: var(--gap) var(--gap-l);

  font-size: var(--font-size-2);
}
</style>