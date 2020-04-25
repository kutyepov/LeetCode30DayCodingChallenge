import { expect } from 'chai';
import LRUCache from './LRU-cache';

describe('LRUCache', () => {
  let cache = null;
  beforeEach(() => {
    cache = new LRUCache(2);
  });

  afterEach(() => {
    cache = null;
  });

  it('should return put and get element in cache', () => {
    cache.put(1, 2);
    expect(cache.get(1)).to.equal(2);
  });

  it('should return update element in cache', () => {
    cache.put(1, 2);
    cache.put(1, 5);
    expect(cache.get(1)).to.equal(5);
  });

  it('should expire the "oldest" element in cache', () => {
    cache.put(1, 2);
    cache.put(11, 15);
    cache.get(1);
    cache.put(20, 25);
    expect(cache.get(11)).to.equal(-1);
  });

  it('should return -1 for non existent element in cache', () => {
    expect(cache.get(5)).to.equal(-1);
  });
});
