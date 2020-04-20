import { expect } from 'chai';
import search from './search-in-rotated-sorted-array';
describe('search', function () {
  it('should return -1 for non existent target number', function () {
    expect(search([4, 5, 6, 7, 0, 1, 2], 10)).to.equal(-1);
    expect(search([4, 5, 6, 7, 0, 1, 2], -4)).to.equal(-1);
  });
  it('should return -1 for an empty array', function () {
    expect(search([], 1)).to.equal(-1);
  });
  it('should find target element in pivoted array', function () {
    expect(search([2, 0, 1], 0)).to.equal(1);
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).to.equal(4);
    expect(search([4, 5, 6, 7, 0, 1, 2], 4)).to.equal(0);
    expect(search([4, 5, 6, 7, 0, 1, 2], 7)).to.equal(3);
    expect(search([4, 5, 6, 7, 0, 1, 2], 2)).to.equal(6);
  });
  it('should find target element in non-pivoted array', function () {
    expect(search([0], 0)).to.equal(0);
    expect(search([0, 1, 2, 3, 4, 5, 6, 7], 0)).to.equal(0);
    expect(search([0, 1, 2, 3, 4, 5, 6, 7], 4)).to.equal(4);
    expect(search([0, 1, 2, 3, 4, 5, 6, 7], 7)).to.equal(7);
  });
});
