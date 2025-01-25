import { useStorage } from '@vueuse/core';

export function useStoredMap(key: string) {
  return useStorage(key, () => new Map<string, number>(), undefined, {
    serializer: {
      read(value) {
        if (!value) {
          return new Map<string, number>();
        }

        return new Map<string, number>(JSON.parse(value));
      },
      write(value: Map<string, number>) {
        return JSON.stringify([...value.entries()]);
      }
    }
  });
}
