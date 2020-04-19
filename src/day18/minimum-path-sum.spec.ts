import { expect } from 'chai';
import { minPathSum } from './minimum-path-sum';
describe('minPathSum', function () {
  it('should return 7', function () {
    const input = [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ];
    expect(minPathSum(input)).to.equal(7);
  });
  it('should return 9', function () {
    const input = [
      [1, 3, 1],
      [1, 5, 20],
      [4, 2, 1],
    ];
    expect(minPathSum(input)).to.equal(9);
  });
  it('should return 10', function () {
    const input = [
      [1, 3, 1],
      [1, 5, 20],
      [34, 2, 1],
    ];
    expect(minPathSum(input)).to.equal(10);
  });
});
