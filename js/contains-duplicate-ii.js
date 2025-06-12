/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  /**
   *Algorithm
   * 
   * 1. Check if the number already exists and compare current index with stored index and check if is less than k, return true if yes
   * 2. Else Add all numbers in set (Replace if already exist),
   */
  let temp = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (i - temp.get(nums[i]) <= k) {
      return true;
    }
    temp.set(nums[i], i);
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
