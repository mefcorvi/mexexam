<script setup lang="ts">
import { mdiCog, mdiHelp } from '@mdi/js';
import { computed, nextTick, ref, useCssModule, watch } from 'vue';
import GeneralPage from '@/components/GeneralPage.vue';
import GeneralButton from '@/components/GeneralButton.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { useQuestionsStore, type QuestionOption } from '@/stores/questions';
import { useRouteParams } from '@vueuse/router';
import { useRouter } from 'vue-router';
import { until } from '@vueuse/core';

const $style = useCssModule();
const $router = useRouter();

const {
  load,
  stat,
  isAnswerRevealed,
  currentOptionsRandomized,
  currentQuestion,
  getRandomQuestionId,
  revealAnswer,
  selectAnswer,
  updateCounters,
  selectedAnswer,
  setQuestion,
  hasQuestion,
  translations,
} = useQuestionsStore();

const isNoteAvailable = computed(() => currentQuestion.value?.note !== undefined);

const questionParamId = useRouteParams<string>('id', '');

const blinkingAnswer = ref<QuestionOption>();
const isNoteShown = ref(false);

const onQuestionIdChanged = () => {
  if (questionParamId.value === '') {
    return;
  }

  blinkingAnswer.value = undefined;
  isNoteShown.value = false;

  if (hasQuestion(questionParamId.value)) {
    setQuestion(questionParamId.value);
  } else {
    $router.replace({
      params: {
        id: getRandomQuestionId(),
      }
    })
  }
}

watch(questionParamId, onQuestionIdChanged);
load().then(onQuestionIdChanged);

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

  changeQuestionTimeout = window.setTimeout(async () => {
    changeQuestionTimeout = undefined;

    await $router.replace({
      params: {
        id: getRandomQuestionId(),
      },
    })

    await until(selectedAnswer).toBeUndefined();
    await nextTick();
    isPageFadeOut.value = false;
  }, parseInt($style.pageFadeOutDuration, 10));
}

/**
 * Next navigation.
 */
const forward = () => {
  // changing animation is in progress
  if (changeQuestionTimeout) {
    return;
  }

  // current question is choice and answer is not selected, ignore
  if (currentQuestion.value?.type === 'choice' && !selectedAnswer.value) {
    return;
  }

  // current question is text and answer is hidden, just shown answer
  if (currentQuestion.value?.type === 'text' && !isAnswerRevealed.value) {
    revealAnswer();
    return;
  }

  // select next question
  nextQuestion();
}

const getOptionClass = (option: QuestionOption) => {
  const result: string[] = [];

  if (option.id === -1) {
    result.push($style.dontKnowOption);
  }

  if (!selectedAnswer.value) {
    return result;
  }

  // user is selected correct answer
  if (selectedAnswer.value.isAnswer) {
    // selected option is marked as correct
    if (option === selectedAnswer.value) {
      return $style.correct;
    }

    // other options are faded out
    result.push($style['wrong-fade']);
    return result;
  }

  // user is selected wrong answer and we want to show correct answer as blinking
  if (option === blinkingAnswer.value) {
    result.push($style['correct-blinking']);
    return result;
  }

  // if blinking has ended, show correct option as correct
  if (option.isAnswer) {
    result.push($style.correct);
    return result;
  }

  // current option is wrong
  result.push($style.wrong);
  return result;
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

const onPageClick = (ev: MouseEvent) => {
  if (isButtonOrLinkClick(ev)) {
    return;
  }

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


const t = (key: string) => {
  return translations.t(locale.value, key);
}

const onNoteClick = (ev: MouseEvent) => {
  if (isButtonOrLinkClick(ev)) {
    return;
  }

  ev.stopPropagation();
  hideNote();
}

const hideNote = () => {
  isNoteShown.value = false;
}

const showNote = () => {
  isNoteShown.value = true;
}

const openSettings = () => {
  $router.push({
    name: 'settings'
  });
}

function isButtonOrLinkClick(ev: MouseEvent) {
  const target = ev.target as HTMLElement;
  return target.tagName === 'BUTTON' || target.tagName === 'A';
}
</script>

<template>
  <GeneralPage @click="onPageClick" :class="{ [$style.fadeOut]: isPageFadeOut }">
    <template #topBar>
      <div :class="$style.navigation">
        <div :class="[{ [$style.disabled]: !isNoteAvailable }]" @click.stop="showNote">
          <SvgIcon type="mdi" :path="mdiHelp" />
        </div>
        <div @click.stop="openSettings">
          <SvgIcon type="mdi" :path="mdiCog" />
        </div>
      </div>
    </template>
    <div :class="$style.progress">
      <div :class="$style.correctAnswers" :style="{ width: `${stat.correctPercentage}%` }"></div>
      <div :class="$style.wrongAnswers" :style="{ width: `${stat.wrongPercentage}%` }"></div>
    </div>
    <div :class="$style.question" v-if="currentQuestion">
      <div :class="$style.text" @click.stop="toggleLocale">
        <div>
          <img :src="`/sections/${currentQuestion.section.image}`" v-if="currentQuestion.section.image" />

          <div> {{ t(currentQuestion.question) }}</div>
        </div>
      </div>
      <div :class="$style.answers">
        <template v-if="currentQuestion.type === 'choice'">
          <div v-for="option in currentOptionsRandomized" :key="`${currentQuestion.id}-${option.id}`"
            :class="$style.option">
            <GeneralButton @click.stop="onOptionClick(option)" :class="[$style.button, getOptionClass(option)]">
              {{ t(option.value) }}
            </GeneralButton>
          </div>
        </template>
        <div v-if="currentQuestion.type === 'text'"
          :class="[$style.answer, isAnswerRevealed ? '' : $style.hiddenAnswer]" @click.stop="forward">
          <p :key="idx" v-for="(item, idx) of t(currentQuestion.answer).split('\n')">{{ item }}</p>
        </div>
      </div>
    </div>
    <div v-if="currentQuestion" @click.stop="onNoteClick"
      :class="[$style.noteContainer, { [$style.hidden]: !isNoteShown }]">
      <div v-if="currentQuestion.note" class="scroll" :class="[$style.note, { [$style.hidden]: !isNoteShown }]">
        <img v-if="currentQuestion.noteImage" :src="`/notes/${currentQuestion.noteImage}`" />
        <div v-html="t(currentQuestion.note)"></div>
      </div>
    </div>
  </GeneralPage>
</template>

<style module lang="less">
@pageFadeOutDuration: 200ms;

:export {
  pageFadeOutDuration: @pageFadeOutDuration;
}

.counter {
  font-weight: 500;

  cursor: pointer;
}

.question {
  flex-grow: 1;

  width: 100%;
  height: 100%;
  padding: var(--gap);
  padding-top: var(--topbar-height);
}

.text {
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: center;
  align-content: center;
  align-items: flex-end;

  width: 100%;
  min-height: 6em;
  margin-bottom: var(--gap-s);
  padding: 0.75em 1em;

  font-size: var(--font-size-3);
  line-height: 130%;
  font-weight: 400;
  text-wrap: pretty;
  text-shadow: var(--text-shadow);

  background: linear-gradient(90deg, var(--secondary-color-alpha-5), var(--secondary-color-alpha-30), var(--secondary-color-alpha-5));
  border-radius: var(--border-radius);

  &>div {
    max-width: 400px;

    text-align: center;

    opacity: 1;
    transition: opacity @pageFadeOutDuration;
  }

  img {
    width: 64px;
    height: 64px;
    margin: 0 auto;

    border-radius: var(--border-radius);
  }
}


.answers {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;

  padding: var(--gap);

  font-size: var(--font-size-2);

  opacity: 1;
  transition: opacity @pageFadeOutDuration;

  .option {
    width: 100%;
    max-width: 400px;
  }

}

.fadeOut {
  .text>div {
    opacity: 0;
  }

  .answers {
    opacity: 0;
  }
}

.button {
  &.correct {
    color: var(--success-text-color);

    background: var(--success-bg-color);
  }

  &.correct-blinking {
    animation: success 300ms infinite;
  }

  &.wrong {
    color: var(--error-text-color);

    background: var(--error-bg-color);
  }

  &.wrong-fade {
    opacity: 0.3;
  }
}

.next {
  color: var(--text-color);

  background: var(--secondary-color-20);
}

.answer {
  width: 100%;
  margin-bottom: 1rem;

  font-size: var(--font-size-2);
  text-align: center;

  cursor: pointer;
  filter: blur(0);
  transition: filter 200ms;
}

.hiddenAnswer {
  filter: blur(10px);
}

.navigation {
  display: flex;
  flex-shrink: 0;

  font-size: var(--font-size-4);
  line-height: 100%;

  user-select: none;

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
    cursor: default;
    opacity: 0.3;
  }
}

.progress {
  position: fixed;
  top: 0;
  z-index: 3;

  display: flex;

  width: 100%;
  height: 2px;

  background: var(--secondary-color-10);

  .correctAnswers {
    flex-grow: 0;
    flex-shrink: 0;

    height: 100%;

    background: var(--success-bg-color);
  }

  .wrongAnswers {
    flex-grow: 0;
    flex-shrink: 0;

    height: 100%;

    background: var(--error-bg-color);
  }
}

@keyframes success {

  0%,
  49% {
    color: var(--success-text-color);

    background: var(--success-bg-color);
  }

  50%,
  100% {
    color: var(--btn-text-color);

    background: var(--btn-bg-color);
  }
}

.noteContainer {
  position: fixed;
  top: var(--topbar-height);
  right: 0;
  bottom: 0;
  left: 0;

  &.hidden {
    pointer-events: none;
  }
}

.note {
  max-height: 100%;
  margin: 0 auto;
  padding: var(--gap-l);
  overflow: auto;

  font-size: var(--font-size-2);
  line-height: 160%;

  background: var(--bg-color-alpha-80);
  border-radius: var(--border-radius) var(--border-radius) 0 0;

  transform: translateY(0);
  cursor: pointer;
  opacity: 1;
  backdrop-filter: blur(30px);
  transition: all 500ms;

  img {
    float: left;

    width: 50%;
    max-width: 400px;
    margin-right: var(--gap);
    margin-bottom: var(--gap-s);

    border-radius: var(--border-radius);
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  h1 {
    font-size: var(--font-size-4);
    font-weight: 500;
  }

  h2 {
    font-size: var(--font-size-3);
    font-weight: 500;
  }

  p {
    margin-bottom: var(--gap-s);
  }

  a {
    color: var(--main-color);
    text-decoration: underline;

    &:hover {
      color: var(--secondary-color);
    }
  }

  &.hidden {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>
