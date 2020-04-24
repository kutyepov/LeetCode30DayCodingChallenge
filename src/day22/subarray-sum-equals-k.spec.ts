import { expect } from 'chai';
import subarraySum from './subarray-sum-equals-k';

describe('subarraySum', () => {
  it("should return zero for target that doesn't exist in the array", () => {
    expect(subarraySum([0, 0, 0, 0], 5)).to.equal(0);
  });
  it('should return 4 for k = 2, [2, 0, 0, 1, -1]', () => {
    expect(subarraySum([2, 0, 0, 1, -1], 2)).to.equal(4);
  });
  it('should return 2 for k = 2, [1, 1, 1]', () => {
    expect(subarraySum([1, 1, 1], 2)).to.equal(2);
  });
  it('should return 1 for k = 3, [1, 1, 1]', () => {
    expect(subarraySum([1, 1, 1], 3)).to.equal(1);
  });
});
