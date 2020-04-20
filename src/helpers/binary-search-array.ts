export default function binarySearch(array: Array<number>, key: number) {
  if (array.length === 0) {
    return -1;
  }
  return (function binSearch(low: number, high: number) {
    if (high < low) return -1;

    const mid = Math.floor((low + high) / 2);
    if (key === array[mid]) return mid;

    if (key > array[mid]) return binSearch(mid + 1, high);

    return binSearch(low, mid - 1);
  })(0, array.length);
}
