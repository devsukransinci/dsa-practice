/**
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let length = nums.length;
  if (length === 0) return false;
  if (length === 1) return nums[0] === target;
  let left = 0;
  let right = length - 1;

  while (left <= right) {
    // to avoid duplicates
    while (left < right && nums[left] == nums[left + 1]) left++;
    while (left < right && nums[right] == nums[right - 1]) right--;
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return true;
    // Check if mid is greater than left
    if (nums[left] <= nums[mid]) {
      // If taret is between left and mid then update right, else update left
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    // Check if mid is smaller than right
    if (nums[right] >= nums[mid]) {
      // Check if target is betweeb mid and right and update left or else right
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }
  return false;
};

console.log(
  search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2)
);
console.log(search([1, 0, 1, 1, 1], 0));
// console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
// console.log(search([2, 5, 6, 0, 0, 1, 2], 3));
