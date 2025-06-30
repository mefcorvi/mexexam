<script setup lang="ts">
import { ref, useCssModule, watch } from 'vue';
import GeneralPage from '@/components/GeneralPage.vue';
import GeneralButton from '@/components/GeneralButton.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { mdiCog, mdiRotate3d } from '@mdi/js';
import { useRouteParams } from '@vueuse/router';
import { useRouter } from 'vue-router';
import { useFreeSessionStore } from '@/stores/free-session';
import { useTranslations } from '@/stores/translations';
import { RouteName } from '@/router/names';
import { useLocalization } from '@/stores/localization';

const $style = useCssModule();
const $router = useRouter();
const translations = useTranslations();

const {
  startAll,
  startSection,
  currentQuestion,
  getRandomQuestionId,
  setQuestion,
  hasQuestion,
} = useFreeSessionStore();

const questionParamId = useRouteParams<string>('id', '');
const sectionParamId = useRouteParams<string>('sectionId', '');

const isFlipped = ref(false);

const onQuestionIdChanged = () => {
  if (questionParamId.value === '') {
    return;
  }

  isFlipped.value = false;

  if (hasQuestion(questionParamId.value)) {
    setQuestion(questionParamId.value);
  } else {
    const questionId = getRandomQuestionId();

    if (!questionId) {
      $router.replace({
        name: RouteName.Home,
      });
      return;
    }

    $router.replace({
      params: {
        id: questionId,
        sectionId: sectionParamId.value,
      }
    })
  }
}

const isAllStarted = ref(false);

watch(() => [questionParamId.value, sectionParamId.value], async (newValue, oldValue) => {
  if (!oldValue) {
    oldValue = ['', ''];
  }

  if (!newValue[0] && !newValue[1]) {
    return;
  }

  if (newValue[0] === oldValue[0] && newValue[1] === oldValue[1]) {
    return;
  }

  if (newValue[1] !== oldValue[1] || !oldValue[1]) {
    if (newValue[1] !== 'all') {
      isAllStarted.value = false;
      await startSection(newValue[1]);
    } else {
      if (!isAllStarted.value) {
        isAllStarted.value = true;
        await startAll();
      }
    }
  }

  onQuestionIdChanged();
}, { immediate: true });

/**
 * Flips the card to show question or answer.
 */
const flipCard = () => {
  isFlipped.value = !isFlipped.value;
}

/**
 * Selects a next question.
 */
const nextQuestion = async () => {
  isFlipped.value = false;

  setTimeout(() => {
    $router.replace({
      params: {
        id: getRandomQuestionId(),
        sectionId: sectionParamId.value,
      },
    });
  }, 200);
}


const openSettings = () => {
  $router.push({
    name: RouteName.Settings
  })
};

const { t, locale } = useLocalization();

const qt = (text: string) => {
  return translations.t(locale.value, text);
}
</script>

<template>
  <GeneralPage :class="[$style.page]" :title="sectionParamId ? currentQuestion?.section.title : t('Flash Cards')">
    <template #topBar>
      <div :class="$style.topBar">
        <div :class="$style.spacer"></div>
        <div :class="$style.settingsBtn" @click.stop="openSettings">
          <SvgIcon :path="mdiCog" />
        </div>
      </div>
    </template>

    <div :class="$style.cardContainer" v-if="currentQuestion">
      <div :class="[$style.card, { [$style.flipped]: isFlipped }]" @click="flipCard">
        <div :class="$style.cardInner">
          <!-- Question Side -->
          <div :class="$style.cardFront">
            <div :class="$style.questionContent">
              <h2 :class="$style.questionTitle">{{ t('Question') }}</h2>
              <div :class="$style.questionText">
                {{ qt(currentQuestion.question) }}
              </div>
              <div :class="$style.flipHint">
                <SvgIcon :path="mdiRotate3d" />
                {{ t('Tap to see answer') }}
              </div>
            </div>
          </div>

          <!-- Answer Side -->
          <div :class="$style.cardBack">
            <div :class="$style.answerContent">
              <h2 :class="$style.answerTitle">{{ t('Answer') }}</h2>
              <div :class="$style.answerText">
                {{ qt(currentQuestion.answer) }}
              </div>
              <div v-if="currentQuestion?.note" :class="$style.note" v-html="qt(currentQuestion.note)">
              </div>
              <div :class="$style.answerButtons">
                <div :class="$style.flipHint">
                  <SvgIcon :path="mdiRotate3d" />
                  {{ t('Tap to see question') }}
                </div>
                <GeneralButton @click.stop="nextQuestion" variant="outlined">
                  {{ t('Next') }}
                </GeneralButton>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </GeneralPage>
</template>

<style module lang="less">
.page {
  justify-content: center;
  gap: var(--gap);
}

.topBar {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  min-height: var(--topbar-height);
  padding: 0 var(--gap);
}

.spacer {
  flex: 1;
}

.settingsBtn {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: var(--gap-s);

  border-radius: var(--border-radius);

  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--secondary-color-10);
  }
}

.cardContainer {
  display: flex;
  justify-content: center;
  align-items: center;


  width: 100%;
  max-width: 600px;
  min-height: 400px;
  padding: var(--gap);

  gap: var(--gap-s);
}

.card {
  width: 100%;
  max-width: 600px;
  height: 400px;

  perspective: 1000px;
  cursor: pointer;
}

.cardInner {
  position: relative;

  width: 100%;
  height: 100%;

  text-align: center;

  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card.flipped .cardInner {
  transform: rotateY(180deg);
}

.cardFront,
.cardBack {
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: var(--gap);

  background: var(--bg-color);
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  backface-visibility: hidden;
}

.cardBack {
  transform: rotateY(180deg);
}

.questionContent,
.answerContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  gap: var(--gap);
}

.questionTitle,
.answerTitle {
  margin: 0;

  font-size: var(--font-size-h2);
  font-weight: 600;
  color: var(--text-color);
}

.questionText,
.answerText {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  font-size: var(--font-size-2);
  line-height: 1.6;
  text-align: center;
  color: var(--text-color);
}

.note {
  padding: var(--gap-s);

  font-size: var(--font-size-a2);
  text-align: left;
  color: var(--secondary-color);

  background: var(--secondary-color-10);
  border-left: 4px solid var(--secondary-color);
  border-radius: var(--border-radius);
}

.answerButtons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-s);

  width: 100%;

  button {
    max-width: 150px;
  }
}

.flipHint {
  display: flex;
  align-items: center;

  font-size: var(--font-size-a2);
  color: var(--text-color-60);
  gap: var(--gap-s);
}
</style>