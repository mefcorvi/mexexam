export enum LoadingStatus {
  Idle = 'idle',
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error'
}

export function wrapLoading(
  target: () => { loadingStatus: LoadingStatus },
  fn: () => Promise<void> | void
) {
  return async () => {
    target().loadingStatus = LoadingStatus.Loading;
    try {
      await fn();
      target().loadingStatus = LoadingStatus.Loaded;
    } catch (e) {
      target().loadingStatus = LoadingStatus.Error;
    }
  };
}
