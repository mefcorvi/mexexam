<script setup lang="ts">
import { computed, ref, useCssModule, watch } from 'vue';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import { useQuestionsStore, type QuestionOption } from '../../stores/questions';
import { useDark } from '@vueuse/core';
import { useRouteParams } from '@vueuse/router';
import { useRouter } from 'vue-router';

const $style = useCssModule();
const $router = useRouter();

const {
  isAnswerRevealed,
  correctCount,
  currentOptionsRandomized,
  currentQuestion,
  getRandomQuestionId,
  resetCount,
  revealAnswer,
  selectAnswer,
  updateCounters,
  selectedAnswer,
  setQuestion,
  hasQuestion,
  translations,
  wrongCount,
} = useQuestionsStore();

const questionParamId = useRouteParams<string>('id', '');

const hasBackPage = ref(false);
const hasForwardPage = ref(false);

const isBackAllowed = computed(() => hasBackPage.value);
const isForwardAllowed = computed(() => hasForwardPage.value || selectedAnswer.value || currentQuestion.value.type === 'text');
const blinkingAnswer = ref<QuestionOption>();

watch(questionParamId, () => {
  blinkingAnswer.value = undefined;

  if (hasQuestion(questionParamId.value)) {
    setQuestion(questionParamId.value);

    const answerId = window.history.state['answer-id'];
    const isRevealed = window.history.state['answer-revealed'] === '1';

    hasBackPage.value = !!window.history.state['back'];
    hasForwardPage.value = !!window.history.state['forward'];

    if (typeof answerId === 'number') {
      const answer = currentOptionsRandomized.value.find(x => x.id === answerId);

      if (answer) {
        selectAnswer(answer);
      }
    }

    if (isRevealed) {
      revealAnswer();
    }
  } else {
    $router.replace({
      params: {
        id: getRandomQuestionId(),
      }
    })
  }
}, { immediate: true });

let blinkingTimeout: number | undefined;

const isPageFadeOut = ref(false);
let changeQuestionTimeout: number | undefined;

/**
 * Selects a next question.
 */
const nextQuestion = () => {
  window.clearTimeout(changeQuestionTimeout);
  changeQuestionTimeout = undefined;
  isPageFadeOut.value = true;

  changeQuestionTimeout = window.setTimeout(() => {
    changeQuestionTimeout = undefined;
    window.clearTimeout(blinkingTimeout);

    history.replaceState({
      ['answer-id']: selectedAnswer.value?.id,
      ['answer-revealed']: isAnswerRevealed.value ? '1' : undefined,
    }, '');

    $router.push({
      params: {
        id: getRandomQuestionId(),
      },
    })

    isPageFadeOut.value = false;
  }, parseInt($style.pageFadeOutDuration, 10));
}

/**
 * Back navigation.
 */
const back = () => {
  if (!isBackAllowed.value) {
    return;
  }

  window.history.back();
}

/**
 * Next navigation.
 */
const forward = () => {
  // changing animation is in progress
  if (changeQuestionTimeout) {
    return;
  }

  // user returned by navigation, ignore
  if (history.state.forward) {
    history.forward();
    return;
  }

  // current question is choice and answer is not selected, ignore
  if (currentQuestion.value.type === 'choice' && !selectedAnswer.value) {
    return;
  }

  // current question is text and answer is hidden, just shown answer
  if (currentQuestion.value.type === 'text' && !isAnswerRevealed.value) {
    revealAnswer();
    return;
  }

  // select next question
  nextQuestion();
}

const getOptionClass = (option: QuestionOption) => {
  if (!selectedAnswer.value) {
    return undefined;
  }

  // user is selected correct answer
  if (selectedAnswer.value.isAnswer) {
    // selected option is marked as correct
    if (option === selectedAnswer.value) {
      return $style.correct;
    }

    // other options are faded out
    return $style['wrong-fade'];
  }

  // user is selected wrong answer and we want to show correct answer as blinking
  if (option === blinkingAnswer.value) {
    return $style['correct-blinking'];
  }

  // if blinking has ended, show correct option as correct
  if (option.isAnswer) {
    return $style.correct;
  }

  // current option is wrong
  return $style.wrong;
}

const onOptionClick = (option: QuestionOption) => {
  // user has already made a choice, so go to the next question
  if (selectedAnswer.value) {
    forward();
    return;
  }

  selectAnswer(option);
  updateCounters();

  if (!option.isAnswer) {
    const correctAnswer = currentOptionsRandomized.value.find(x => x.isAnswer);
    blinkingAnswer.value = correctAnswer;
  }

  blinkingTimeout = window.setTimeout(() => {
    blinkingAnswer.value = undefined;
  }, 1000);
}

const locale = ref<'es' | 'ru'>('es');

const onPageClick = () => {
  forward();
}

const toggleLocale = () => {
  if (locale.value === 'es') {
    locale.value = 'ru';
  } else {
    locale.value = 'es';
  }
}

const isDarkTheme = useDark()

const t = (key: string) => {
  return translations.t(locale.value, key);
}
</script>

<template>
  <div :class="$style.page" @click="onPageClick">
    <div :class="$style.topBar">
      <div :class="$style.counter" @click.stop="resetCount">
        <span>{{ correctCount }}</span>&nbsp;/&nbsp;<span>{{ correctCount + wrongCount }}</span>
      </div>
      <ToggleSwitch v-model="isDarkTheme" size="16px" label="Dark Theme" />
    </div>
    <div :class="[$style.container, { [$style.fadeOut]: isPageFadeOut }]">
      <div :class="$style.scrollContainer">
        <div :class="$style.question" :key="currentQuestion.id">
          <div :class="$style.text" @click.stop="toggleLocale">{{ t(currentQuestion.question) }}</div>
          <template v-if="currentQuestion.options">
            <div v-for="option in currentQuestion.options" :key="option.id">
              <button @click.stop="onOptionClick(option)" :class="[$style.button, getOptionClass(option)]">
                {{ t(option.value) }}
              </button>
            </div>
          </template>
          <div v-if="currentQuestion.type === 'text'"
            :class="[$style.answer, isAnswerRevealed ? '' : $style.hiddenAnswer]" @click.stop="forward">
            <p :key="idx" v-for="(item, idx) of t(currentQuestion.answer).split('\n')">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.navigation">
      <div :class="[$style.back, { [$style.disabled]: !isBackAllowed }]" @click.stop="back">←</div>
      <div :class="[$style.forward, { [$style.disabled]: !isForwardAllowed }]" @click.stop="forward">→</div>
    </div>
  </div>
</template>

<style module lang="less">
@pageFadeOutDuration: 200ms;

:export {
  pageFadeOutDuration: @pageFadeOutDuration;
}

.page {
  display: flex;
  width: 100%;
  min-height: 100%;
  position: relative;
  flex-direction: column;
  align-items: center;
}

.topBar {
  padding: var(--gap-s) var(--gap);
  display: flex;
  align-items: center;
  gap: var(--gap);
  flex-shrink: 0;

  &>* {
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
}

.counter {
  font-weight: 500;
  cursor: pointer;
}

.container {
  display: flex;
  width: 100%;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;

  opacity: 1;
  transition: opacity @pageFadeOutDuration;

  &.fadeOut {
    opacity: 0;
  }
}

.scrollContainer {
  overflow: auto;
  display: flex;
  width: 100%;
  max-height: 100%;
  justify-content: center;
}

.question {
  max-width: 600px;
  padding-left: var(--gap);
  padding-right: var(--gap);
}

.text {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  line-height: 130%;
  text-wrap: pretty;
  background: var(--secondary-color-10);
  padding: var(--gap);
  border-radius: var(--gap);
}

.button {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  padding: 0.7rem 1rem;
  cursor: pointer;
  text-align: center;
  width: 100%;
  transition: background-color 200ms, color 200ms;

  &.correct {
    background: var(--success-bg-color);
    color: var(--success-text-color);
  }

  &.correct-blinking {
    animation: success 300ms infinite;
  }

  &.wrong {
    background: var(--error-bg-color);
    color: var(--error-text-color);
  }

  &.wrong-fade {
    opacity: 0.3;
  }
}

.next {
  background: var(--secondary-color-20);
  color: var(--text-color);
}

.hidden {
  visibility: hidden;
}

.answer {
  filter: blur(0);
  transition: filter 200ms;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  padding: 0.7rem 1rem;
  cursor: pointer;
  text-align: center;
  width: 100%;
}

.hiddenAnswer {
  filter: blur(10px);
}

.navigation {
  display: flex;
  font-size: 3rem;
  user-select: none;
  width: 100%;
  line-height: 100%;
  flex-shrink: 0;

  &>div {
    padding: var(--gap-s);
    flex-basis: 50%;
    cursor: pointer;
    transition: opacity 200ms;
  }

  &>div:first-child {
    text-align: right;
  }

  .disabled {
    opacity: 0.3;
    cursor: default;
  }
}

@keyframes success {

  0%,
  49% {
    background: var(--success-bg-color);
    color: var(--success-text-color);
  }

  50%,
  100% {
    background: var(--btn-bg-color);
    color: var(--btn-text-color);
  }
}
</style>
