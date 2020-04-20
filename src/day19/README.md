# Search in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `[0,1,2,4,5,6,7]` might become `[4,5,6,7,0,1,2]`).

You are given a target value to search. If found in the array return its index, otherwise return `-1`.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of _O(log n)_.

**Example 1:**

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

**Example 2:**

```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

## Solution

[search-in-rotated-sorted-array.ts](https://github.com/kutyepov/LeetCode30DayCodingChallenge/blob/master/src/day19/search-in-rotated-sorted-array.ts)

## Explanation

The key part of this algorithm lies in `findPivot` method. Once pivot is found, regular `binarySearch` can be performed on a sub-array of element at, before or after the pivot.

`findPivot()` itself it very similar to binarySearch algorithm. On every call is halves input array and searches for the "cliff", where the sequence of sorted numbers "breaks". Once such spot in the array is found, it returns its index.

Time Complexity: _O(log n)_ both `findPivot` and `binarySearch` run in logarithmic time.

Space Complexity: _O(n)_, once algorithm finds pivot, it uses `.slice()` method to create a sub-array to search an element in.

A few notes on Time / Space complexity.

1. Space complexity can be reduced to _O(1)_ by getting rid of `.slice()`-s.
2. It's is not necessary to perform binary search after pivot was found. Target element can be found that is aware of left and right boundaries of the current sub-array.

I decided to sacrifice some performance for better readability of the code 🤷‍♂️

## Tests

[search-in-rotated-sorted-array.spec.ts](https://github.com/kutyepov/LeetCode30DayCodingChallenge/blob/master/src/day19/search-in-rotated-sorted-array.spec.ts)
