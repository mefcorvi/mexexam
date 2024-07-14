<script setup lang="ts">
import { useRouter } from 'vue-router';

const slots = defineSlots<{
  topBar: {};
  default: {};
}>();

const props = defineProps<{
  hideTopBar?: boolean;
}>();

const $router = useRouter();

const openHome = () => {
  $router.push({
    name: 'home'
  });
};
</script>
<template>
  <div :class="$style.page">
    <div :class="$style.topBar" v-if="!hideTopBar">
      <div :class="$style.logo" @click="openHome">
        <img src="/logo.svg" width="32" height="32" />
        <div :class="$style.title">MexExam</div>
      </div>
      <div :class="$style.separator"></div>
      <slot name="topBar" />
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
  z-index: 2;

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

  backdrop-filter: blur(30px);
  gap: var(--gap);

  &>* {
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }

  .separator {
    flex-grow: 1;
    flex-shrink: 1;
  }
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

  .title {
    font-size: var(--font-size-2);
    font-weight: 500;
  }
}
</style>