/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const swap = (i, j) => {
    temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
  };

  // Declare a left  and right pointer
  
  let left = 0;
  let right = nums.length - 1;
  // Counter to tract current value
  let i = 0;

  // While i is less than right, keep incremnting
  while (i <= right) {
    // When we incounter 0, move it to left and increment left countr
    if (nums[i] === 0) {
      swap(i, left);
      left++;
    }

    // when we enounter 2, moe it to right and decrement right,
    if (nums[i] === 2) {
      swap(i, right);
      right--;
      i--;// Decrement to cancel the increemnt in neext step,i ishouldnt be moved when value is 2
    }

    // Increment I after each iteration
    i++;
  }

  console.log(nums);
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColorsBubbleSort = function (nums) {
  let temp = null;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  console.log(nums);
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
