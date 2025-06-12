/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumberOptimised = function (nums) {
  /**
   * Algorithm
   * init a res value equal to length
   * 1. Sum all the numbers from 0th to nth element
   * 2. In each iteration, subtract the itth element from inpit array
   */
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) {
    res += i - nums[i];
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  /**
   * There is only 1 missing number
   * Count starts from 0
   */
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }
  return nums[nums.length - 1] + 1;
};

// console.log(missingNumber([0, 1]));
console.log(
  missingNumberOptimised([
    45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
    4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34,
    30, 25, 47, 0, 31, 42, 24, 10, 14,
  ])
);
