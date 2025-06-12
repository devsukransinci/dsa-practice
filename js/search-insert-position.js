/**
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target <= nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return target < nums[mid] ? mid : mid + 1;
};

// console.log(searchInsert([1, 3, 5, 6], 5));
// // [1,3,5,6], target = 2
console.log(searchInsert([1, 3, 5, 6], 2));
// // Input: nums = [1,3,5,6], target = 7
console.log(searchInsert([1, 3, 5, 6], 7));
