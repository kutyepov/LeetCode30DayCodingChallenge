class LRUCache {
  cache: {};
  capacity: number;
  q: number[];

  constructor(capacity: number) {
    this.cache = {};
    this.capacity = capacity;
    this.q = [];
  }

  get(key: number): number {
    const element: null = this.cache[key];
    if (element === undefined) {
      return -1;
    }
    const index: number = this.q.indexOf(key);
    this.q.splice(index, 1);
    this.q.unshift(key);
    return element;
  }

  put(key: number, value: number) {
    if (this.cache[key] !== undefined) {
      this.cache[key] = value;
      const index: number = this.q.indexOf(key);
      this.q.splice(index, 1);
      this.q.unshift(key);
      return;
    }

    if (this.capacity === this.q.length) {
      const expired: number = this.q.pop();
      delete this.cache[expired];
    }
    this.q.unshift(key);
    this.cache[key] = value;
  }
}

export default LRUCache;
