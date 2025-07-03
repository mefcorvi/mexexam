import {
  getCurrentInstance,
  onActivated,
  onDeactivated,
  onMounted,
  readonly,
  ref,
  type ComponentInternalInstance
} from 'vue';

export const useActivatable = () => {
  // Components are not activated by default
  const isActivated = ref(false);
  const currentInstance = getCurrentInstance();

  // If root component is not mounted, then apparrently application is still initializing
  // and we should mark the component as activated to comply with the server-side logic.
  if (!currentInstance?.root.isMounted) {
    isActivated.value = true;
  }

  // Current component is already mounted and should be activated.
  if (currentInstance?.isMounted) {
    isActivated.value = true;
  }

  onActivated(() => {
    isActivated.value = true;
  });

  onDeactivated(() => {
    isActivated.value = false;
  });

  // If the component is mounted and there are no deactivated parents, it is activated.
  // Note: onActivated is also called after onMounted unless a parent is deactivated.
  // We want to set the value as early as possible.
  onMounted(() => {
    isActivated.value = !isParentDeactivated(currentInstance);
  });

  return readonly(isActivated);
};

/**
 * Returns true if any parent component is deactivated.
 */
function isParentDeactivated(
  currentInstance: ComponentInternalInstance | null
) {
  if (!currentInstance) {
    return false;
  }

  let parent = currentInstance.parent;

  while (parent) {
    if (parent.isDeactivated) {
      return true;
    }

    parent = parent.parent;
  }

  return false;
}
