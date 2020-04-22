class BinaryMatrix {
  matrix: number[][];
  n: number;
  m: number;
  getHasBeenCalledTimes: number;
  constructor(matrix: number[][]) {
    this.matrix = matrix;
    this.m = matrix[0] && matrix[0].length ? matrix[0].length : 0;
    this.n = this.m === 0 ? 0 : matrix.length;
    this.getHasBeenCalledTimes = 0;
  }

  get(x: number, y: number): number {
    if (this.getHasBeenCalledTimes >= 1000) {
      throw new Error('wrong answer');
    }
    this.getHasBeenCalledTimes++;
    return this.matrix[x][y];
  }

  dimensions(): number[] {
    return [this.n, this.m];
  }
}

function leftMostColumnWithOne(binaryMatrix: BinaryMatrix): number {
  const [rows, columns] = binaryMatrix.dimensions();

  let result: number = Number.MAX_VALUE;

  for (let i: number = 0; i < rows; i++) {
    let low: number = 0;
    let high: number = columns;
    let mid: number = Math.floor(high / 2);

    // We've got lucky. We found the absolute minimum and can end early.
    if (result === 0 || binaryMatrix.get(i, 0) === 1) {
      result = 0;
      break;
    }

    // Since the last element is 0, there's no need to check this row at all
    // because it will not have any 1s.
    if (binaryMatrix.get(i, high - 1) === 0) {
      continue;
    }

    while (high > low) {
      const curr: number = binaryMatrix.get(i, mid);

      if (curr === 0 && mid >= result) {
        // if we've previously found an element that was "leftier" than the current
        // there's no need to proceed further
        break;
      }

      if (curr === 1) {
        // if we encountered 1 in the row, let's see what is the value of the previous
        // element in the row. If it happens to be 0, then we found the leftmost 1
        // for this row. Otherwise, keep searching in the left sub array.
        const prev: number = binaryMatrix.get(i, mid - 1);

        if (prev === 0) {
          result = Math.min(result, mid);
          break;
        } else {
          high = mid - 1;
          mid = Math.floor((high + low) / 2);
        }
      } else {
        // if we encountered 0 in the row, let's see what is the value of the next
        // element in the row. If it happens to be 1, then we found the leftmost 1
        // for this row. Otherwise, keep searching in the right sub array.
        const next: number = binaryMatrix.get(i, mid + 1);

        if (next === 1) {
          result = Math.min(result, mid + 1);
          break;
        } else {
          low = Math.max(low, mid + 1);
          mid = Math.floor((high + low) / 2);
        }
      }
    }
  }

  return result === Number.MAX_VALUE ? -1 : result;
}

export { BinaryMatrix, leftMostColumnWithOne as default };
