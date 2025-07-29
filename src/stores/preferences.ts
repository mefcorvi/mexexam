import { createSharedComposable } from '@vueuse/core';
import { computed } from 'vue';
import { useStorage } from '@vueuse/core';

export type StudyMode = 'training' | 'flashcards' | 'exam' | 'texts';

interface StartPagePreferences {
  selectedMode: StudyMode;
  selectedSectionId: string | null;
  showNotes: boolean;
}

const defaultPreferences: StartPagePreferences = {
  selectedMode: 'training',
  selectedSectionId: null,
  showNotes: true
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

  const showNotes = computed({
    get: () => preferences.value.showNotes,
    set: (value: boolean) => {
      preferences.value.showNotes = value;
    }
  });

  const resetPreferences = () => {
    preferences.value = { ...defaultPreferences };
  };

  return {
    selectedMode,
    selectedSectionId,
    showNotes,
    resetPreferences
  };
});
