/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  /**
   *Algorithm
   * 
   * 1. If length is 1 then check if value matches target and return 0, 0 else -1, -1
   * 2. Run a birnary serach where increment left as left = mid + 1;
   * 3. Decrement right as mid - 1 if target less than mid,
   * 3. If same then -> take 2 temp variabl -> Decremenet t1 until its same as target, ncrement t2 until its same as target -> return t1, t2
   */
  if (nums.length === 1) {
    if (nums[0] === target) return [0, 0];
    else return [-1, -1];
  }
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      let temp1 = mid;
      let temp2 = mid;
      while (nums[temp1 - 1] === target) {
        temp1 = temp1 - 1;
      }
      while (nums[temp2 + 1] === target) {
        temp2 += 1;
      }
      return [temp1, temp2];
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([2, 2], 2));
console.log(searchRange([1, 4], 4));
