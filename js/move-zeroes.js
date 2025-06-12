/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  /**
   * Algorithm
   *
   * Use quick sort
   * Create left and rght pointer starting from 0
   * and iterate until right is less than nums.length
   * 
   * WHen number is not 0 then swap left and right, increment left
   * else just incremnt right
   */
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] != 0) {
      let temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;
      left++;
    }
  }
  return nums;
};

console.log(moveZeroes([1, 2, 0, 0, 5, 6]));
