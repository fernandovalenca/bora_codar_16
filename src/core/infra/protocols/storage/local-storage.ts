import { Storage } from "@/core/application/protocols/storage";

export class LocalStorage implements Storage {
  async set<T>(key: string, value: T): Promise<void> {
    localStorage.setItem(key, JSON.stringify(value));
  }

  async get<T>(key: string): Promise<T> {
    const item = localStorage.getItem(key);

    if (!item) {
      return {} as T;
    }

    return JSON.parse(item);
  }

  async remove(key: string): Promise<void> {
    localStorage.removeItem(key);
  }
}
