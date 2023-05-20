type Keys = 'web-inspection:items';

export const localStorage = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getItem(key: Keys): any {
    return localStorage.getItem(key);
  }
};
