/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  /**
   * Algorithm
   * 
   * 1. Create 2 sets to get unique valu
   * Check if set has a value using set.has and if true insert in a serultarray
   */
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  const result = [];

  for (var value of set1) {
    if (set2.has(value)) {
      result.push(value);
    }
  }
  return result;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
