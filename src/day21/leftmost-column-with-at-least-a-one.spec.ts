import { expect } from 'chai';
import leftMostColumnWithOne, {
  BinaryMatrix,
} from './leftmost-column-with-at-least-a-one';
describe('BinaryMatrix', () => {
  describe('.dimension()', () => {
    it('should return [2,2] for 2x2 matrix', () => {
      const input: number[][] = [
        [0, 0],
        [1, 1],
      ];
      const matrix: BinaryMatrix = new BinaryMatrix(input);
      expect(matrix.dimensions()).to.deep.equal([2, 2]);
    });
    it('should return [0,0] for empty matrix', () => {
      const input: number[][] = [[]];
      const matrix: BinaryMatrix = new BinaryMatrix(input);
      expect(matrix.dimensions()).to.deep.equal([0, 0]);
    });
  });
  describe('.get(x,y)', () => {
    it('should return 0 for x=1, y=0 in [[1,1],[0,1]] matrix', () => {
      const input: number[][] = [
        [1, 1],
        [0, 1],
      ];
      const matrix: BinaryMatrix = new BinaryMatrix(input);
      expect(matrix.get(1, 0)).to.equal(0);
    });
    it('should return 0 for x=0, y=0 in [[0,1],[1,1]] matrix', () => {
      const input: number[][] = [
        [0, 1],
        [1, 1],
      ];
      const matrix: BinaryMatrix = new BinaryMatrix(input);
      expect(matrix.get(0, 0)).to.equal(0);
    });
    it('should return 1 for x=0, y=1 in [[0,1],[0,0]] matrix', () => {
      const input: number[][] = [
        [0, 1],
        [0, 0],
      ];
      const matrix: BinaryMatrix = new BinaryMatrix(input);
      expect(matrix.get(0, 1)).to.equal(1);
    });
    it('should return 1 for x=1, y=1 in [[0,0],[0,1]] matrix', () => {
      const input: number[][] = [
        [0, 0],
        [0, 1],
      ];
      const matrix: BinaryMatrix = new BinaryMatrix(input);
      expect(matrix.get(1, 1)).to.equal(1);
    });
    it('should throw an error if get is called 1000+ times', () => {
      const matrix: BinaryMatrix = new BinaryMatrix([[0, 0]]);

      for (let i = 0; i < 1000; i++) {
        matrix.get(0, 0);
      }
      expect(() => matrix.get(0, 0)).to.throw();
    });
  });
});

describe('leftMostColumnWithOne', () => {
  it('should find the left most 1', () => {
    const inputs = [
      {
        input: [
          [0, 0],
          [1, 1],
        ],
        result: 0,
      },
      {
        input: [
          [0, 0],
          [0, 1],
        ],
        result: 1,
      },
      {
        input: [
          [0, 0, 0, 1],
          [0, 0, 1, 1],
          [0, 1, 1, 1],
        ],
        result: 1,
      },
      {
        input: [
          [0, 0, 0, 1],
          [0, 1, 1, 1],
          [0, 0, 0, 1],
        ],
        result: 1,
      },
    ];

    inputs.forEach(({ input, result }) => {
      const matrix: BinaryMatrix = new BinaryMatrix(input);
      expect(leftMostColumnWithOne(matrix)).to.equal(result);
    });
  });
  it('should not exceed 1000 matrix.get(x,y) calls on 100x100 matrix', () => {
    const input = [];

    for (let i = 0; i < 100; i++) {
      input[i] = new Array(100);
      input[i].fill(0);
    }
    input[99][99] = 1;
    const matrix: BinaryMatrix = new BinaryMatrix(input);
    expect(leftMostColumnWithOne(matrix)).to.equal(99);
  });

  it('should return -1 if no 1s were found in matrix', () => {
    const matrix: BinaryMatrix = new BinaryMatrix([
      [0, 0],
      [0, 0],
    ]);
    expect(leftMostColumnWithOne(matrix)).to.equal(-1);
  });
});
