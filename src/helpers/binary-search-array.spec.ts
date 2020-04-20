import { expect } from 'chai';
import binarySearch from './binary-search-array';
describe('Binary Search', function () {
  it('should return -1', function () {
    expect(binarySearch([], 10)).to.equal(-1);
    expect(binarySearch([1], 10)).to.equal(-1);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 10)).to.equal(-1);
  });
  it('should return 1', function () {
    expect(binarySearch([1, 2], 2)).to.equal(1);
    expect(binarySearch([0, 1, 2], 1)).to.equal(1);
  });
  it('should return 0', function () {
    expect(binarySearch([1], 1)).to.equal(0);
    expect(binarySearch([1, 2], 1)).to.equal(0);
  });
});
