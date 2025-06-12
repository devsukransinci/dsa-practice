/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  /**
   * Algorithm
   * 
   * 
   * 1. Itegrate though the list
   * 2. If element as same as passed value, then delete it
   * 3. Decrement the counter as the length of array was decreased
   */

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
