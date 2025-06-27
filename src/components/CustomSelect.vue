<script setup lang="ts">
defineProps<{
  modelValue: string;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
}>();

defineEmits<{
  'update:modelValue': [value: string];
}>();
</script>

<template>
  <div :class="$style.selectWrapper">
    <select :value="modelValue" @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      :class="$style.select">
      <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<style module lang="less">
.selectWrapper {
  position: relative;

  max-width: 200px;
}

.select {
  width: 100%;
  padding: 8px 40px 8px 16px; // Increased right padding for arrow

  font-family: var(--font-family);
  font-size: var(--font-size-a1); // Smaller font size
  color: var(--text-color);

  background: var(--main-color-10);
  border: 2px solid var(--main-color-20);
  border-radius: var(--border-radius);

  cursor: pointer;
  transition: all var(--transition-duration);

  appearance: none;

  &:hover {
    background: var(--main-color-20);
    border-color: var(--main-color-30);
  }

  &:focus {
    background: var(--main-color-20);
    border-color: var(--main-color);
    outline: none;
    box-shadow: 0 0 0 3px var(--main-color-alpha-20);
  }
}

.selectWrapper::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 12px;

  width: 0;
  height: 0;

  border-top: 6px solid var(--text-color);
  border-right: 6px solid transparent;
  border-left: 6px solid transparent;

  transform: translateY(-50%);

  pointer-events: none;
}
</style>