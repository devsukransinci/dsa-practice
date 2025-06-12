/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  /**
   * 
   * If tehe sum of previous positive umber is less than current negative number then assign the sum of previous number to variable and move ahead
   * 
   * 
   *Algorithm
   * Store maxSum as first ele and current sum as 0
   * Iterage through numbers
   * If sum is less than 0 then reset currSum to 0
   * Add current sum an curent number
   * Update the max va;ue
   */
  let maxSum = nums[0];
  let currSum = 0;

  for (const iterator of nums) {
    if (currSum < 0) currSum = 0;
    currSum += iterator;
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2, -3, -1]));
