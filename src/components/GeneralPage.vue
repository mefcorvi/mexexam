<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { mdiArrowLeft } from '@mdi/js';
import SvgIcon from './SvgIcon.vue';
import { RouteName } from '@/router/names';
import { useLocaleRouter } from '@/composables/useLocaleRouter';

defineSlots<{
  topBar: {};
  default: {};
}>();

const {
  hideTopBar = false,
  title = ''
} = defineProps<{
  hideTopBar?: boolean;
  title?: string;
  reserveSpace?: boolean;
}>();

const $router = useRouter();
const { pushLocale } = useLocaleRouter();

const openHome = () => {
  pushLocale(RouteName.Home);
};

const hasBack = ref(false);

onMounted(() => {
  hasBack.value = !!window.history.state.back;
});

$router.afterEach(() => {
  hasBack.value = !!window.history.state.back;
});

const back = () => {
  window.history.back();
};
</script>
<template>
  <div :class="$style.page">
    <div :class="$style.topBar" v-if="!hideTopBar">
      <div :class="$style.logo" @click="openHome" v-if="!hasBack">
        <img src="/logo.svg" width="32" height="32" alt="Logo" />
        <div :class="$style.logoTitle">MexExam</div>
      </div>
      <template v-else>
        <div :class="$style.backBtn" @click="back">
          <SvgIcon type="mdi" :path="mdiArrowLeft" size="24" />
        </div>
        <div v-if="title" :class="$style.title">
          {{ title }}
        </div>
      </template>
      <div :class="$style.separator"></div>
      <slot name="topBar" />
    </div>
    <slot />
  </div>

</template>
<style module lang="less">
.page {
  --general-page-gap: var(--page-gap, var(--gap));

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 100%;
  padding: var(--gap);
  padding-top: calc(var(--topbar-height) + var(--gap-s));
  gap: var(--general-page-gap);

  --topbar-height: 48px;

  @media @md-and-up {
    --topbar-height: 64px;
  }
}

.topBar {
  position: fixed;
  top: 0;
  z-index: 3;

  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: var(--topbar-height);
  margin: 0 auto;
  padding: 0 var(--gap);

  font-size: var(--font-size-1);
  line-height: 100%;

  background: var(--bg-color);

  @media @md-and-up {
    background: transparent;
  }

  gap: var(--gap);

  &>* {
    opacity: 0.7;
  }

  .separator {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .onHover({
    opacity: 1;
  });
}

.backBtn {
  width: 24px;
  height: 24px;

  line-height: 100%;

  cursor: pointer;
}

.logo {
  display: flex;
  align-items: center;

  padding: var(--gap-s);

  line-height: 100%;

  cursor: pointer;

  img {
    margin-right: var(--gap-s);

    border-radius: 30%;
  }

  .logoTitle {
    font-size: var(--font-size-2);
    font-weight: 500;
  }

  &.logoFadeOut {
    opacity: 0.7;
    transition: opacity 200ms;

    .onHover({
      opacity: 1;
    });
}
}

.title {
  font-weight: 500;
  text-align: center;
}
</style>