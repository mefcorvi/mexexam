<script setup lang="ts">
defineProps<{
  disabled?: boolean;
  href?: string;
  target?: string;
}>();
</script>
<template>
  <component :is="href ? 'a' : 'button'" :href="href" :target="target" :data-rpl="!disabled" :class="$style.button"
    :disabled="!href && disabled">
    <slot />
  </component>
</template>
<style module lang="less">
.button {
  --transition-duration: var(--btn-transition-duration, 200ms);
  display: block;

  width: 100%;
  padding: 0.75em 1em;

  font-family: inherit;
  font-size: var(--font-size-1);
  text-align: center;
  color: inherit;
  color: var(--btn-text-color);
  text-decoration: none;
  letter-spacing: 0.02em;
  text-shadow: var(--btn-text-shadow, var(--text-shadow));

  background: none;
  background: var(--btn-bg-color);
  border: none;
  border: 0;
  border-radius: var(--btn-border-radius);
  outline: 0;

  cursor: pointer;
  transition:
    background-color var(--transition-duration),
    color var(--transition-duration);

  appearance: none;

  .onHover({
    background: var(--main-color-30);
  });

&:disabled {
  opacity: 0.9;

  pointer-events: none;
}

&[href]:hover {
  text-decoration: none;
}
}
</style>