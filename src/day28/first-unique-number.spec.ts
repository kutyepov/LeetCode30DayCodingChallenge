import { expect } from 'chai';
import FirstUniqueNumber from './first-unique-number';

describe('FirstUniqueNumber', () => {
  let q = null;

  beforeEach(() => {
    q = new FirstUniqueNumber([1, 2, 3]);
  });

  it('should return 1 for [1, 2, 3] q', () => {
    expect(q.showFirstUnique()).to.equal(1);
  });
  it('should return 2 for [1, 2, 3, 1] q', () => {
    q.add(1);
    expect(q.showFirstUnique()).to.equal(2);
  });
  it('should return -1 for [1, 2, 3, 1, 3, 2] q', () => {
    q.add(1);
    q.add(3);
    q.add(2);
    expect(q.showFirstUnique()).to.equal(-1);
  });
});
