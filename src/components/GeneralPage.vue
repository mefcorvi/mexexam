<template>
  <div :class="$style.page">
    <slot />
  </div>

</template>
<style module lang="less">
.page {
  display: flex;
  width: 100%;
  min-height: 100%;
  position: relative;
  flex-direction: column;
  align-items: center;
}
</style>