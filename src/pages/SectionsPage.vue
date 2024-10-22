<script setup lang="ts">
import GeneralPage from '@/components/GeneralPage.vue';
import GeneralButton from '@/components/GeneralButton.vue';
import GeneralMenu from '@/components/GeneralMenu.vue';
import SectionImage from '@/components/SectionImage.vue';
import { useLocalization } from '@/stores/localization';
import { useQuestionsStore } from '@/stores/questions';
import { useRouter } from 'vue-router';
import { RouteName } from '@/router/names';

const {
  sections,
  loadSections,
} = useQuestionsStore();

loadSections();

const $router = useRouter();

const startSection = (sectionId: string) => {
  $router.push({
    name: RouteName.SectionQuestions,
    params: {
      sectionId,
      id: 'init'
    }
  })
};

const { t } = useLocalization();
</script>
<template>
  <GeneralPage :class="$style.page" :title="t('Choose section')">
    <div :class="$style.tilesMenu">
      <div :class="$style.tile" v-for="section of sections.values() " :key="section.id"
        @click="startSection(section.id)">
        <SectionImage :class="$style.sectionImg" :section="section" />
        <div :class="$style.tileTitle">{{ t(section.title) }}</div>
      </div>
    </div>
  </GeneralPage>
</template>
<style module lang="less">
.page {
  justify-content: center;
  --tile-size: 200px;
}

.tilesMenu {
  display: grid;

  grid-template-columns: repeat(auto-fill, var(--tile-size));

  width: 100%;
  padding: var(--gap);
  gap: var(--gap);
}

.tile {
  position: relative;

  width: var(--tile-size);
  height: var(--tile-size);
  overflow: hidden;

  border-radius: var(--border-radius);

  cursor: pointer;

  &:hover {
    .sectionImg {
      filter: brightness(1.2);
    }

    .tileTitle {
      background: var(--secondary-color);
    }
  }
}

.sectionImg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;

  width: var(--tile-size);
  height: var(--tile-size);

  filter: brightness(1);
  transition: filter var(--transition-duration);
}

.tileTitle {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  padding: var(--gap-s) var(--gap);

  font-size: var(--font-size-1);
  line-height: 1.2;
  text-align: center;
  color: var(--text-color);
  color: var(--main-text-color);

  background: var(--main-color);

  transition: background var(--transition-duration);
}
</style>