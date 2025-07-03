import { createSharedComposable } from '@vueuse/core';
import { computed } from 'vue';
import { useStorage } from '@vueuse/core';

export type StudyMode = 'training' | 'flashcards' | 'exam';

interface StartPagePreferences {
  selectedMode: StudyMode;
  selectedSectionId: string | null;
}

const defaultPreferences: StartPagePreferences = {
  selectedMode: 'training',
  selectedSectionId: null
};

export const usePreferencesStore = createSharedComposable(() => {
  const preferences = useStorage<StartPagePreferences>(
    'startPagePreferences',
    defaultPreferences
  );

  const selectedMode = computed({
    get: () => preferences.value.selectedMode,
    set: (value: StudyMode) => {
      preferences.value.selectedMode = value;
    }
  });

  const selectedSectionId = computed({
    get: () => preferences.value.selectedSectionId,
    set: (value: string | null) => {
      preferences.value.selectedSectionId = value;
    }
  });

  const resetPreferences = () => {
    preferences.value = { ...defaultPreferences };
  };

  return {
    selectedMode,
    selectedSectionId,
    resetPreferences
  };
});
