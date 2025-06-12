/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  //Algorithm
  // Boyer Moore Algorithm
  // USe 2 variable result and counter
  // Increment counter wen value is same
  // Decerement when a new value occurs
  // When count <= zeo then mkake count as 1 and assign result tp current val
  let result = null;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (result == nums[i]) {
      count++;
    } else {
      count--;
    }

    if (count <= 0) {
      count = 1;
      result = nums[i];
    }
  }
  return result;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElementUnoptimised = function (nums) {
  /**
   * Majority element are there for tleast n/2 times
   */
  let map = {};
  let majorCon = nums.length / 2;
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] += 1;
    }
    if (map[nums[i]] >= majorCon) return nums[i];
  }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
