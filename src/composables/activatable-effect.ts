import { useActivatable } from './activatable';
import { useConditionalEffect } from './conditional';

export function useActivatableEffect(
  fn: () => void,
  options?: { immediate?: boolean }
) {
  useConditionalEffect(useActivatable(), fn, options);
}
