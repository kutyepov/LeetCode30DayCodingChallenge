export default function subarraySum(nums: number[], k: number): number {
  let count: number = 0;
  let sum: number = 0;
  let freq: object = {};

  for (let num of nums) {
    sum += num;

    if (sum === k) {
      // if current sum is equal to k, increment the count.
      // this is needed when we encounter the number itself
      // and/or bunch of zeros.
      count++;
    }

    const diff: number = sum - k;

    if (freq[diff] !== undefined) {
      // if we found something in the table, it means that the sum === k
      // somewhere before. For example in [1, 1, 1] and k = 2,
      // it would have been:
      // [1, 1, 1]
      //     _  _
      // these two elements
      count += freq[diff];
    }

    // store all sums and their frequencies in hash table
    freq[sum] = freq[sum] === undefined ? 1 : freq[sum] + 1;
  }
  return count;
}
