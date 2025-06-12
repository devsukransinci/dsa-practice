/**
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let temp = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!temp.get(nums[i])) {
      temp.set(nums[i], 1);
    } else return true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4]));
