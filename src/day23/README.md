# Bitwise AND of Numbers Range

Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

**Example 1:**

```
Input: [5,7]
Output: 4
```

**Example 2:**:

```
Input: [0,1]
Output: 0
```

## Solution

[subarray-sum-equals-k.ts](https://github.com/kutyepov/LeetCode30DayCodingChallenge/blob/master/src/day23/bitwise-AND-of-numbers-range.ts)

## Complexity

Time Complexity: O(1)

Space Complexity: O(1)

## Explanation

Let's take range m = 5 and n = 7 as an example.

So, our range is 5, 6, 7, where

5<sub>\_10</sub> = 101<sub>\_2</sub>

6<sub>\_10</sub> = 110<sub>\_2</sub>

7<sub>\_10</sub> = 111<sub>\_2</sub>

We observe that the first row consists on only 1s, thus it's pointless to perform bitwise operations on all of them because it will never change.
How do we decrease the number of computations then?
If we simply skip 6 (110), the result would end up being 5, which is incorrect.
Instead, we can reduce 101 (5) and 7 (111), until they're equal. We can do so by performing right shift
such as `5 >> 2 // 1` and `7 >> 2 // 1`. Note, that we had to shift them by two bits,
so in order to get the correct answer, we just need to shift back by the same amount to the left:
`1 << 2 // 4 (100)`, which is our correct result.

## Tests

[bitwise-AND-of-numbers-range.spec.ts](https://github.com/kutyepov/LeetCode30DayCodingChallenge/blob/master/src/day23/bitwise-AND-of-numbers-range.spec.ts)
