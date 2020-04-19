export function minPathSum(matrix: Array<Array<number>>): number {
  const cols: number = matrix[0].length;
  const rows: number = matrix.length;

  // update weights for the first row
  for (let col: number = 1; col < cols; col++) {
    matrix[0][col] += matrix[0][col - 1];
  }

  // update weights for the first column
  for (let row: number = 1; row < rows; row++) {
    matrix[row][0] += matrix[row - 1][0];
  }

  // update the rest
  for (let row: number = 1; row < rows; row++) {
    for (let col: number = 1; col < cols; col++) {
      matrix[row][col] += Math.min(matrix[row - 1][col], matrix[row][col - 1]);
    }
  }

  return matrix[rows - 1][cols - 1];
}
