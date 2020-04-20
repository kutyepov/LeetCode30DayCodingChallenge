import binarySearch from '../helpers/binary-search-array';

function findPivot(array: Array<number>, low: number, high: number) {
  if (high < low) return -1;
  if (high === low) return low;

  const mid = Math.floor((low + high) / 2);
  if (mid < high && array[mid] > array[mid + 1]) return mid;

  if (mid > low && array[mid] < array[mid - 1]) return mid - 1;

  if (array[low] >= array[mid]) return findPivot(array, low, mid - 1);

  return findPivot(array, mid + 1, high);
}

export default function search(array: Array<number>, key: number) {
  const n = array.length;
  const pivot = findPivot(array, 0, n - 1);

  // if pivot wasn't found, then array is not rotated
  if (pivot === -1) return binarySearch(array, key);

  // we've got lucky
  if (array[pivot] === key) return pivot;

  // our value is in left subarray
  if (array[0] <= key) return binarySearch(array.slice(0, pivot), key);
  // our value is in right subarray
  let index = binarySearch(array.slice(pivot + 1), key);

  return index === -1 ? index : index + pivot + 1;
}
