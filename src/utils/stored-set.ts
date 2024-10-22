import { useStorage } from '@vueuse/core';

export function useStoredSet(key: string) {
  return useStorage(key, () => new Set<string>(), undefined, {
    serializer: {
      read(value) {
        return value ? new Set(value.split(',')) : new Set<string>();
      },
      write(value: Set<string>) {
        return [...value].join(',');
      }
    }
  });
}
