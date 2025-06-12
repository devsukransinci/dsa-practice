/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  /**
   *Algorithm
   * 1. Sort the numbers
   * 
   * 2. Run a for loop till n-3 (To compensate for 2nd, 3rd and 4th val),
   * 3. Compare i-1th and ith element, if same then skip the iteration,
   * 4. Run another for loop for finding 2nd, 3rd, 4th Val,
   * 5. Compare j and j-1th lement , if same then skip iteration,
   * 6. Create k as mid element between j and l, Create l as last elemnt in 4 element group,
   * 7. Loop until j < k
   * 8. Cal sum of i, j, k, l element,
   * 9. If sum = target -> Push element in result arr -> increment k until its not a repeat val -< decrement l until its not repeat
   * 10. If sum < target then incremnt k,
   * 11. If sum > target then decrement l,
   */

  // Sort
  nums.sort((a, b) => a - b);
  let res = [];

  // Run a for loop till n-3
  for (let i = 0; i < nums.length - 3; i++) {
    // Compare i-1th and ith element, if same then skip the iteration
    if (i > 0 && nums[i - 1] === nums[i]) continue;

    // Run another for loop for finding 2nd, 3rd, 4th Val
    for (let j = i + 1; j < nums.length - 2; j++) {
      // Compare j and j-1th lement , if same then skip iteration
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue;

      // Create k as mid element between j and l, Create l as last elemnt in 4 element group
      let k = j + 1;
      let l = nums.length - 1;

      while (k < l) {
        // Cal sum of i, j, k, l element
        const sum = nums[i] + nums[j] + nums[k] + nums[l];

        if (sum === target) {
          res.push([nums[i], nums[j], nums[k], nums[l]]);

          // If sum = target -> Push element in result arr -> increment k until its not a repeat val -< decrement l until its not repeat
          while (nums[k] === nums[k + 1]) k++;
          while (nums[l] === nums[l - 1]) l--;

          // Do this one additonal time as part of this iteration
          k++;
          l--;
        } else if (sum < target) {
          // If sum < target then incremnt k
          k++;
        } else if (sum > target) {
          // If sum > target then decrement l
          l--;
        }
      }
    }
  }
  return res;
};

// Output [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.table(fourSum([1, 0, -1, 0, -2, 2], 0));
