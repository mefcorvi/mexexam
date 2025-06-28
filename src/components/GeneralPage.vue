<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { mdiArrowLeft } from '@mdi/js';
import SvgIcon from './SvgIcon.vue';
import { RouteName } from '@/router/names';

defineSlots<{
  topBar: {};
  default: {};
}>();

defineProps<{
  hideTopBar?: boolean;
  hideBackButton?: boolean;
  hideTitle?: boolean;
  title?: string;
}>();

const $router = useRouter();

const openHome = () => {
  $router.push({
    name: RouteName.Home
  });
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
        <img src="/logo.svg" width="32" height="32" />
        <div :class="$style.logoTitle">MexExam</div>
      </div>
      <template v-else>
        <div :class="$style.backBtn" @click="back">
          <SvgIcon type="mdi" :path="mdiArrowLeft" size="24" />
        </div>
        <div :class="[$style.logo, $style.logoFadeOut]" @click="openHome">
          <img src="/logo.svg" width="32" height="32" />
          <div :class="$style.logoTitle">MexExam</div>
        </div>
      </template>
      <div :class="$style.separator"></div>
      <slot name="topBar" />
    </div>
    <div v-if="!hideTitle" :class="$style.title">
      {{ title }}
    </div>
    <slot />
  </div>

</template>
<style module lang="less">
.page {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 100%;
}

.page::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;

  width: 100%;
  height: 100%;

  background: url('@/assets/coat.svg') no-repeat center center;

  opacity: 0.05;
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
  padding: var(--gap-s) var(--gap);

  font-size: var(--font-size-1);

  background: var(--bg-color-alpha-50);

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
  margin-bottom: var(--gap);

  font-size: var(--font-size-4);
  font-weight: 500;
  text-align: center;
}
</style>