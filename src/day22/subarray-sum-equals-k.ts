export default function subarraySum(nums: number[], k: number): number {
  let count: number = 0;
  let sum: number = 0;
  let freq: object = {};

  for (let num of nums) {
    sum += num;

    const diff: number = sum - k;

    if (freq[diff] !== undefined) {
      // if we found something in the table, it means that the sum === k
      // somewhere before. For example in [1, 1, 1] and k = 2,
      // it would have been:
      // [1, 1, 1]
      //     _  _
      // these two elements
      count += freq[diff];
    } else if (diff === 0) {
      // if diff is zero, it means that we encountered a situation where
      // `sum` is equal to k. For example, nums = [1,1,1] and k = 3
      // on the very last step, sum will be 3, which is equal to k;
      // if we tried to access frequency table with `freq[0]`, we
      // would get `undefined` and our `count` will be off by 1.
      count++;
    }

    // store all sums and their frequencies in hash table
    freq[sum] = freq[sum] === undefined ? 1 : freq[sum] + 1;
  }
  return count;
}
