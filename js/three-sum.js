/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  //Algorithm
  // 1. Set target as 0
  // 2. Sort the array in desc
  // 3. Run a for loop till n-2 (n-2 coz will do the su for first, mid, last)
  // If target > 0 then quit as were only left with pistive number which cant result to 0
  // If i == i-1 then skip as we are dealing with number already seen
  // 4. Consider i as starting el, k as last and j ad between
  // 5. Run a while loop until j < k
  // Calculate sum of num[i, j, k]
  // if sum == target then (Push it in result array, check if j and j+1 are same and increment, repeat for k,  Mnaull increment for both for one last time)
  // else if sum < target then j++
  // else if sum > target then k--
  const target = 0;
  let results = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    j = i + 1;
    k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === target) {
        results.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k + 1]) k--;

        j++;
        k--;
      } else if (sum < target) j++;
      else if (sum > target) k--;
    }
  }

  return results;
}

console.table(threeSum([-1, 0, 1, 2, -1, -4]));
