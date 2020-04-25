class LRUCache {
  cache: Map<number, number>;
  capacity: number;
  q: number[];

  constructor(capacity: number) {
    this.cache = new Map<number, number>();
    this.capacity = capacity;
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1;
    }
    const value: number = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return this.cache.get(key);
  }

  put(key: number, value: number) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      const iterator: Iterator<number> = this.cache.keys();
      const oldestElementKey: number = iterator.next().value;
      this.cache.delete(oldestElementKey);
    }
  }
}

export default LRUCache;
