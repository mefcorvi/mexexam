<script setup lang="ts">
import { computed, ref, useCssModule, watch } from 'vue';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import { useQuestionsStore, type QuestionOption } from '../../stores/questions';
import { useDark, useToggle } from '@vueuse/core';
import { useRouteParams } from '@vueuse/router';
import { useRouter } from 'vue-router';

const $style = useCssModule();
const $router = useRouter();

const {
  stat,
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

const isNoteAvailable = computed(() => currentQuestion.value.note !== undefined);

const questionParamId = useRouteParams<string>('id', '');

const hasBackPage = ref(false);
const hasForwardPage = ref(false);

const isBackAllowed = computed(() => hasBackPage.value);
const isForwardAllowed = computed(() => hasForwardPage.value || selectedAnswer.value || currentQuestion.value.type === 'text');

const blinkingAnswer = ref<QuestionOption>();
const isNoteShown = ref(false);

watch(questionParamId, () => {
  blinkingAnswer.value = undefined;
  isNoteShown.value = false;

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
  blinkingAnswer.value = undefined;
  window.clearTimeout(blinkingTimeout);

  changeQuestionTimeout = undefined;
  window.clearTimeout(changeQuestionTimeout);

  isPageFadeOut.value = true;

  changeQuestionTimeout = window.setTimeout(() => {
    changeQuestionTimeout = undefined;

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
  if (!window.getSelection()?.isCollapsed) {
    return;
  }

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

const hideNote = () => {
  isNoteShown.value = false;
}

const showNote = () => {
  isNoteShown.value = true;
}

const isLocaleToggled = computed({
  get: () => locale.value === 'ru',
  set: (value: boolean) => {
    locale.value = value ? 'ru' : 'es';
  }
});
</script>

<template>
  <div :class="$style.page" @click="onPageClick">
    <div :class="$style.progress">
      <div :class="$style.correctAnswers" :style="{ width: `${stat.correctPercentage}%` }"></div>
      <div :class="$style.wrongAnswers" :style="{ width: `${stat.wrongPercentage}%` }"></div>
    </div>
    <div :class="$style.topBar">
      <div :class="$style.counter" @click.stop="resetCount">
        <span>{{ correctCount }}</span>&nbsp;/&nbsp;<span>{{ correctCount + wrongCount }}</span>
      </div>
      <ToggleSwitch v-model="isDarkTheme" size="16px" label="Dark Theme" />
      <ToggleSwitch v-model="isLocaleToggled" size="16px" label="Translate" />
    </div>
    <div :class="[$style.container, { [$style.fadeOut]: isPageFadeOut }]">
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
    <div :class="$style.navigation">
      <div :class="[$style.back, { [$style.disabled]: !isBackAllowed }]" @click.stop="back">←</div>
      <div :class="[$style.question, { [$style.disabled]: !isNoteAvailable }]" @click.stop="showNote">?</div>
      <div :class="[$style.forward, { [$style.disabled]: !isForwardAllowed }]" @click.stop="forward">→</div>
    </div>
    <div @click.stop="hideNote" :class="[$style.noteContainer, { [$style.hidden]: !isNoteShown }]">
      <div v-if="currentQuestion.note" :class="[$style.note, { [$style.hidden]: !isNoteShown }]">
        <img v-if="currentQuestion.noteImage" :src="`/notes/${currentQuestion.noteImage}`" />
        {{ t(currentQuestion.note) }}
      </div>
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
  justify-content: center;
  position: fixed;
  top: 2px;
  left: 0;
  right: 0;
  gap: var(--gap);
  flex-shrink: 0;
  background: var(--bg-color-alpha-50);
  backdrop-filter: blur(5px);

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
  justify-content: center;
  flex-grow: 1;
  padding-top: 42px;
  padding-bottom: 64px;

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
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: var(--gap-s);
  line-height: 130%;
  text-wrap: pretty;
  background: var(--secondary-color-10);
  padding: var(--gap);
  border-radius: var(--border-radius);
}

.button {
  font-size: 1.1rem;
  margin-bottom: var(--gap-s);
  padding: 0.7rem 1.4rem;
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

.answer {
  filter: blur(0);
  transition: filter 200ms;
  font-size: 1.15rem;
  margin-bottom: 1rem;
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
  background: var(--bg-color-alpha-50);
  backdrop-filter: blur(5px);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  .back {
    flex-grow: 1;
    text-align: right;
  }

  .forward {
    flex-grow: 1;
    text-align: left;
  }

  &>div {
    padding: var(--gap-s);
    cursor: pointer;
    transition: opacity 200ms;
  }

  .disabled {
    opacity: 0.3;
    cursor: default;
  }
}

.progress {
  background: var(--secondary-color-10);
  height: 2px;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;

  .correctAnswers {
    background: var(--success-bg-color);
    height: 100%;
    flex-grow: 0;
    flex-shrink: 0;
  }

  .wrongAnswers {
    background: var(--error-bg-color);
    height: 100%;
    flex-grow: 0;
    flex-shrink: 0;
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

.noteContainer {
  position: fixed;
  left: 0;
  top: 40px;
  right: 0;
  bottom: 0;
  background: var(--bg-color-alpha-10);
  backdrop-filter: blur(3px);
  opacity: 1;
  transition: opacity 500ms;

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
}

.note {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 600px;
  line-height: 160%;
  margin: 0 auto;
  max-height: 100%;
  overflow: auto;
  padding: var(--gap-l);
  background: var(--bg-color-alpha-70);
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  font-size: 1.1rem;
  cursor: pointer;
  transition: opacity 500ms, transform 500ms;
  opacity: 1;
  transform: translateY(0);

  img {
    float: left;
    width: 50%;
    margin-right: var(--gap-s);
    margin-bottom: var(--gap-s);
    border-radius: var(--border-radius);
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  &.hidden {
    opacity: 0;
    transform: translateY(100%);
  }
}
</style>
