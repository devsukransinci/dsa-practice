/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  /**
   * Algorithm
   * 1. Create a map storing all the keys and their count
   * 2. Iterate through second array and if the value exists in map then decrement map count and insert value in result array
   */
  let map = new Map();
  for (const n of nums1) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else map.set(n, 1);
  }
  let result = [];
  for (const n of nums2) {
    if (map.has(n) && map.get(n) > 0) {
      result.push(n);
      map.set(n, map.get(n) - 1);
    }
  }
  return result;
};
