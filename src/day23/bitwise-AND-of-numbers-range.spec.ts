import { expect } from 'chai';
import rangeBitwiseAnd from './bitwise-AND-of-numbers-range';

describe('rangeBitwiseAnd', () => {
  it('should return zero for [0,0] range', () => {
    expect(rangeBitwiseAnd(0, 0)).to.equal(0);
  });
  it('should return zero for [0,7] range', () => {
    expect(rangeBitwiseAnd(0, 7)).to.equal(0);
  });
  it('should return 4 for [5,7] range', () => {
    expect(rangeBitwiseAnd(5, 7)).to.equal(4);
  });
});
