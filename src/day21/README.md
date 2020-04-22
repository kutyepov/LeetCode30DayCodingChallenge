# Leftmost Column with at Least a One

_(This problem is an **interactive problem**.)_

A binary matrix means that all elements are `0` or `1`. For each **individual** row of the matrix, this row is sorted in non-decreasing order.

Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least a `1` in it. If such index doesn't exist, return `-1`.

**You can't access the Binary Matrix directly**. You may only access the matrix using a `BinaryMatrix` interface:

- `BinaryMatrix.get(x, y`) returns the element of the matrix at index `(x, y)` (0-indexed).
- `BinaryMatrix.dimensions()` returns a list of 2 elements `[m, n]`, which means the matrix is `m * n`.

Submissions making more than `1000` calls to `BinaryMatrix.get` will be judged _Wrong Answer_. Also, any solutions that attempt to circumvent the judge will result in disqualification.

For custom testing purposes you're given the binary matrix `mat` as input in the following four examples. You will not have access the binary matrix directly.

**Example1**

![alt](https://assets.leetcode.com/uploads/2019/10/25/untitled-diagram-5.jpg)

```
Input: mat = [[0,0],[1,1]]
Output: 0
```

**Example2**

![alt](https://assets.leetcode.com/uploads/2019/10/25/untitled-diagram-4.jpg)

```
Input: mat = [[0,0],[0,1]]
Output: 1
```

**Example3**

![alt](https://assets.leetcode.com/uploads/2019/10/25/untitled-diagram-3.jpg)

```
Input: mat = [[0,0],[0,0]]
Output: -1
```

**Example4**

![alt](https://assets.leetcode.com/uploads/2019/10/25/untitled-diagram-6.jpg)

```
Input: mat = [[0,0,0,1],[0,0,1,1],[0,1,1,1]]
Output: 1
```

## Solution

[leftmost-column-with-at-least-a-one.ts](https://github.com/kutyepov/LeetCode30DayCodingChallenge/blob/master/src/day21/leftmost-column-with-at-least-a-one.ts)

## Complexity

Time Complexity: O(m + log(n))

Space Complexity: O(1)

## Explanation

See comments in [code](https://github.com/kutyepov/LeetCode30DayCodingChallenge/blob/master/src/day21/leftmost-column-with-at-least-a-one.ts).

## Tests

[leftmost-column-with-at-least-a-one.spec.ts](https://github.com/kutyepov/LeetCode30DayCodingChallenge/blob/master/src/day21/leftmost-column-with-at-least-a-one.spec.ts)
