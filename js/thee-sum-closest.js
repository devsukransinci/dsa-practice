/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // Algorithm
  
  // 1. Sort the array
  // 2. Take a var closest and assign a very high value
  // 3. Run a for loop till nums.length - 2 (To accomodate 2nd and 3rd num)
  // 4. Check if current and previous number were same (Skip itr in that scenario)
  // 5. Cal j as number after i and k as las element
  // 6. Run a while run until j  < k
  // Calculate sum of ith, jth, kth
  // If equal to target then return the result
  // 7. Calculate who os closer ...prev closest or total,  closest => if target - closest < target - total then closest else total
  // 8. If total < target then increment j, skip duplicate
  // 9. else decreemnt k
  let closest = Infinity;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;

    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === target) return target;

      if (Math.abs(sum - target) < Math.abs(closest - target)) closest = sum;

      if (sum < target) j++;
      else k--;
    }
  }
  return closest;
};

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
console.log(threeSumClosest([-1, 2, 1, -4], 1));
