import {
  EffectScope,
  type WatchOptions,
  type WatchSource,
  effectScope,
  watch
} from 'vue';
import { tryOnScopeDispose } from '@vueuse/core';

/**
 * Creates an effect that is run only while condition is true.
 */
export function useConditionalEffect(
  condition: WatchSource<boolean>,
  fn: () => void,
  options?: WatchOptions<boolean>
) {
  let scope: EffectScope | undefined;

  // stop the scope when the component is unmounted
  tryOnScopeDispose(() => {
    if (scope) {
      scope.stop();
      scope = undefined;
    }
  });

  watch(
    condition,
    (value) => {
      if (!value) {
        if (scope) {
          scope.stop();
          scope = undefined;
        }

        return;
      }

      if (!scope) {
        scope = effectScope();
        scope.run(fn);
      }
    },
    options
  );
}
