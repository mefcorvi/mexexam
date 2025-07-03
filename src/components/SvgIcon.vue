<template>
  <svg :width="sizeValue" :height="sizeValue" :viewBox="viewboxValue" :style="styles">
    <path :d="path" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const types = {
  mdi: {
    size: 24,
    viewbox: "0 0 24 24",
  },
  "simple-icons": {
    size: 24,
    viewbox: "0 0 24 24",
  },
  default: {
    size: 0,
    viewbox: "0 0 0 0",
  },
}

const { type = 'mdi', path, size, viewbox, flip = 'none', rotate = 0 } = defineProps<{
  type?: keyof typeof types;
  path: string;
  size?: string | number;
  viewbox?: string;
  flip?: "horizontal" | "vertical" | "both" | "none";
  rotate?: number;
}>();

const styles = computed(() => {
  return {
    "--sx": ["both", "horizontal"].includes(flip) ? "-1" : "1",
    "--sy": ["both", "vertical"].includes(flip) ? "-1" : "1",
    "--r": isNaN(rotate) ? rotate : rotate + "deg",
  }
});

const defaults = types[type] || types.default;

const sizeValue = computed(() => size || defaults.size);

const viewboxValue = computed(() => viewbox || defaults.viewbox);
</script>

<style scoped>
svg {
  transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1));
}

path {
  fill: currentColor;
}
</style>