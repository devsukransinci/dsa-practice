/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (i = 0; i < nums.length; i++) {
    //Next number is identical to current one
    if (nums[i] == nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
    
  }
  console.log(nums);
};

// Doesnt remove unique value, just push them to end
var removeDuplicatesOptimized = function (nums) {
  /**
   * 1. Take a unique value counter and initialize at 0
   * 2. Iterate thrugh the array in a for loop
   * 3. If Compare current and previous valu, if same then increment it else assign jth item to jth - uniqueCounter item
   */
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] === nums[j - 1]) {
      i++;
    } else {
      nums[j - i] = nums[j];
    }
  }
  return nums.length - i;
};

// console.log(removeDuplicatesOptimized([1, 1, 2]));
console.log(removeDuplicatesOptimized([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
