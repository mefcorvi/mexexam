<script lang="ts" setup>
import { useVModel } from '@vueuse/core';

const props = defineProps<{
  modelValue: boolean;
  size?: string;
  label?: string;
}>();

const emit = defineEmits<{
  update: [value: number]
}>();

const modelValue = useVModel(props, 'modelValue', emit);

const toggle = () => {
  modelValue.value = !modelValue.value;
}
</script>
<template>
  <div @click.stop="toggle" :class="$style.toggler">
    <div :class="{
    [$style.outer]: true,
    [$style.outerOn]: modelValue,
    [$style.outerOff]: !modelValue,
  }" :style="{ ['--switch-size']: size }">
      <div :class="{
    [$style.inner]: true,
    [$style.innerLeft]: !modelValue,
    [$style.innerRight]: modelValue,
  }"></div>
    </div>
    <span v-if="label" :class="$style.label">{{ label }}</span>
  </div>
</template>
<style module lang="less">
.outer {
  width: var(--width);
  height: calc(var(--height) + 4px);
  border-radius: var(--height);
  background: var(--bg-color);
  cursor: pointer;
  position: relative;

  --bg-color: var(--switch-bg-color, #999);
  --bg-color-off: var(--switch-off-bg-color, var(--bg-color));
  --bg-color-on: var(--switch-on-bg-color, var(--bg-color));
  --bg-color-toggle: var(--switch-toggle-bg-color, #fff);
  --height: var(--switch-size, 30px);
  --width: calc(2 * var(--height) + 4px);
}

.outerOff {
  background: var(--bg-color-off);
  transition: background 0.4s;
}

.outerOn {
  background: var(--bg-color-on);
  transition: background 0.4s;
}

.inner {
  height: var(--height);
  width: var(--height);
  background: var(--bg-color-toggle);
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
}

.innerLeft {
  top: 2px;
  left: 2px;
  transition: left 0.4s;
}

.innerRight {
  top: 2px;
  left: calc(var(--width) - var(--height) - 2px);
  transition: left 0.4s;
}

.toggler {
  display: flex;
  cursor: pointer;

  align-items: center;

  .label {
    margin-left: 4px;
  }
}
</style>