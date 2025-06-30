<script setup lang="ts">
defineProps<{
  disabled?: boolean;
}>();
</script>
<template>
  <button :data-rpl="!disabled" :class="$style.button" :disabled="disabled">
    <slot />
  </button>
</template>
<style module lang="less">
.button {
  width: 100%;

  text-align: center;
  letter-spacing: 0.02em;

  cursor: pointer;

  &:disabled {
    opacity: 0.9;

    pointer-events: none;
  }
}
</style>