/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  /**
   * Algorithm
   * 
   * Start from back
   * 1. Check n-1 element and see if its possible to reach to nth element
   *  If If its possible then decerement goal `i + nums[i] >= goal then goal = i` => (Current Index + value stored in index = Allowing to reach or not?)
   * 2. Keep decrementing and repeating previous step until we each 0th Index
   * 3. If we reach then its possible to reach till end else not possilbe
   */
  let goal = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) goal = i;
  }
  return goal == 0;
};

// Input: nums = [2,3,1,1,4]
// Output: true
//console.log(canJump([2, 3, 1, 1, 4]));

console.log(canJump([3, 2, 1, 0, 4]));
