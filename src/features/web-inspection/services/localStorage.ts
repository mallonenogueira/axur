import localforage from 'localforage';

type Keys = 'items';

const instance = localforage.createInstance({
  name: 'web-inspection',
  driver: localforage.LOCALSTORAGE
});

export const localStorage = {
  async getItem<T>(key: Keys): Promise<T | null> {
    return instance.getItem<T>(key);
  },

  async setItem<T>(key: Keys, data: T): Promise<T> {
    return instance.setItem<T>(key, data);
  }
};
