/**
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  /**
   *Algorithm
   * 
   * 1. Find the first decreasing number from end
   * 2. If found, Find the number just bigger than decresing n umber then swap 
   * 3. Reverse the list from the index number just bigger than decreasing number to end
   */
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    swap(nums, i, j);
  }

  reverse(nums, i + 1);

  return nums;
};

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

var reverse = (nums, start) => {
  let i = start,
    j = nums.length - 1;
  while (i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
};

// Input: nums = [1,2,3]
// Output: [1,3,2]

console.log(nextPermutation([1, 2, 3]));
