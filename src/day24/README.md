# LRU Cache

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: `get` and `put`.

`get(key)` - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
`put(key, value)` - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a **positive** capacity.

**Follow up:**
Could you do both operations in **O(1)** time complexity?

**Example**

```
LRUCache cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);    // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2);    // returns -1 (not found)
cache.put(4, 4); // evicts key 1
cache.get(1);    // returns -1 (not found)
cache.get(3);    // returns 3
cache.get(4);    // returns 4
```

## Solution

[Naive O(n) Solution](https://github.com/kutyepov/LeetCode30DayCodingChallenge/blob/e1064db125dabde49ebaf39c82ffcc4a722a0d9d/src/day24/LRU-cache.ts)

[O(1) Solution](https://github.com/kutyepov/LeetCode30DayCodingChallenge/blob/master/src/day24/LRU-cache.ts)

## Complexity

Time Complexity: O(1)

Space Complexity: O(n)

## Explanation

Naive implementation uses regular (key, value) pair Object in JavaScript to cache provided values and keys. It also uses queue to keep track of when was the last time element had been accessed. When item is added to cache, its key is added to the end of the queue. Once we reach max capacity of the cache, we remove the item from the front. When cache item is accessed, we remove its key from the queue and add it back to the end. Therefore, every `get()` and `put()` operation is O(n) because we need to find an element in the queue by its keys.

O(1) solution uses [ES6 Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). The idea is similar to the above naive implementation, however, it uses the fact that `Map` stores keys in order they were accessed. Per spec

> The keys in Map are ordered. Thus, when iterating over it, a Map object returns keys in order of insertion.

So, on every call of `get()`, we delete an item in cache and put it back there to force Map update the order of keys.
When we want to expire an element in cache we call [.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys) method on Map to get the iterator. Then, by calling `Iterator`'s [next()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) method we get the the first key in Map, which is the "oldest" one in Map.

## Tests

[LRU-cache.spec.ts](https://github.com/kutyepov/LeetCode30DayCodingChallenge/blob/master/src/day24/LRU-cache.spec.ts)
