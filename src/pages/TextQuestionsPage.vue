<script setup lang="ts">
import { mdiCog } from '@mdi/js';
import { computed, nextTick, ref, useCssModule, watch } from 'vue';
import GeneralPage from '@/components/GeneralPage.vue';
import GeneralButton from '@/components/GeneralButton.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { useRouteParams } from '@vueuse/router';
import { useTranslations } from '@/stores/translations';
import { RouteName } from '@/router/names';
import { useLocalization } from '@/stores/localization';
import { useActivatableEffect } from '@/composables/activatable-effect';
import { useLocaleRouter } from '@/composables/useLocaleRouter';
import { useTextsStore, type Text } from '@/stores/texts';

const $style = useCssModule();
const translations = useTranslations();
const { locale } = useLocalization();

const { getText } = useTextsStore();

const { pushLocale } = useLocaleRouter();

const textId = useRouteParams<string>('id', '');

const selectedText = ref<Text | null>(null);

useActivatableEffect(
  () => {
    watch(
      () => textId.value,
      async (newValue) => {
        selectedText.value = getText(newValue);
      },
      { immediate: true }
    );
  },
  { immediate: true }
);

const shouldShowTranslation = computed(() => locale.value !== 'es');

const t = (key: string | null | undefined) => {
  return translations.t('es', key);
};

const uit = (key: string) => {
  return translations.t(locale.value, key);
};

const openSettings = () => {
  pushLocale(RouteName.Settings);
};
</script>

<template>
  <GeneralPage :reserveSpace="false">
    <template #topBar>
      <div :class="$style.navigation">
        <div @click.stop="openSettings">
          <SvgIcon type="mdi" :path="mdiCog" />
        </div>
      </div>
    </template>
    <template v-if="selectedText">
      <div :class="$style.title">
        <div :class="$style.original">
          {{ selectedText.title.es }}
        </div>
        <div v-if="shouldShowTranslation" :class="$style.translation">
          {{ selectedText.title[locale] }}
        </div>
      </div>
      <div :class="$style.summary">
        {{ selectedText.summary[locale] }}
      </div>
      <div :class="$style.text" v-if="selectedText.text.es">
        <div :class="$style.part" :key="idx" v-for="(s, idx) in selectedText.text.es">
          <p :class="$style.original">{{ s }}</p>
          <p v-if="shouldShowTranslation" :class="$style.translation">
            {{ selectedText.text[locale]?.[idx] }}
          </p>
        </div>
      </div>
      <div :class="$style.questions">
        <h2>Questions</h2>
        <div :class="$style.questionsList">
          <div v-for="(q, idx) in selectedText.questions" :key="idx" :class="$style.question">
            <div :class="$style.questionText">
              <div :class="$style.original">
                {{ q.text.es }}
              </div>
              <div v-if="shouldShowTranslation" :class="$style.translation">
                {{ q.text[locale] }}
              </div>
            </div>
            <div :class="$style.answerText">
              <div :class="$style.original">
                {{ q.answer.es }}
              </div>
              <div v-if="shouldShowTranslation" :class="$style.translation">
                {{ q.answer[locale] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </GeneralPage>
</template>

<style module lang="less">
.text {
  position: relative;

  width: 100%;
  max-width: var(--main-width);
  height: 100%;
}

.title {
  max-width: var(--main-width);

  font-size: var(--font-size-3);
  text-align: center;

  .translation {
    font-size: 70%;
    color: var(--negative-color-alpha-50);
  }
}

.summary {
  max-width: calc(var(--main-width) + var(--gap) * 2);
  padding: var(--gap-s) var(--gap);

  font-size: var(--font-size-a1);

  background: var(--success-bg-color-alpha-5);
  border-radius: var(--border-radius);

  .translation {
    font-size: 80%;
    color: var(--negative-color-alpha-50);
  }
}

.part {
  position: relative;

  margin-bottom: var(--gap);

  font-size: var(--font-size-1);

  p {
    margin-bottom: 0;
  }

  .translation {
    font-size: 80%;
    color: var(--negative-color-alpha-50);
  }
}

.questions {
  max-width: var(--main-width);

  h2 {
    margin-bottom: var(--gap-s);

    font-size: var(--font-size-3);
    text-align: center;
  }

  .question {
    margin-bottom: var(--gap);
    padding: var(--gap-s);

    font-size: var(--font-size-1);

    background-color: var(--negative-color-alpha-5);
    border-radius: var(--border-radius);

    .translation {
      font-size: 80%;
      color: var(--negative-color-alpha-50);
    }
  }

  .questionText {
    .original {
      font-weight: 500;
    }
  }

  .answerText {
    font-size: 95%;
  }
}
</style>
