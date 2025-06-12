/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  /**
   * Explanation
   * Calculate the minimjm number of jump required to reach the end of array
   * Assume it is posible to reach the end of array
   * Solution
   * Keep a trackof range  shortest possilb jump and longest possible jump until we reach end of array
   * Keep iterating by moving shortest possible jum as longest jump (From prev iteration) + 1 and calculating new longest jum
   * Increment total jum count after each iteration
   * 
   * Algorithm
   * 
   * 1. Create a variable for result, left nd right
   * 2. Iterate through array until right is less then length
   *    a. Iterate using a loop from left to right and calculate the next largest jum possible
   *    b. Update left to right + 1 and right to farthest possible jum
   *    c. Increment the jump count by one
   */
  let res = 0;
  let left = (right = 0);
  while (right < nums.length - 1) {
    let farthest = 0;
    for (let i = left; i < right + 1; i++) {
      farthest = Math.max(farthest, nums[i] + i);
    }
    left = right + 1;
    right = farthest;
    res += 1;
  }
  return res;
};

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));
