// import type { OrderHistory } from '@/types';

const initStorage = <T extends keyof StorageKey>(key: T, storage: Storage) => {
  const storageKey = `${key}`;

  const get = (): StorageKey[T] => {
    const value = storage.getItem(storageKey);

    return value as StorageKey[T];
  };
  const set = (value: StorageKey[T]) => {
    if (value == undefined || value == null) {
      return storage.removeItem(storageKey);
    }

    storage.setItem(storageKey, value as string);
  };

  return { get, set };
};

export const authLocalStorage = initStorage('accessToken', localStorage);

interface StorageKey {
  accessToken?: string;
}
