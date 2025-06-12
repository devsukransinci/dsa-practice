/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  /**
   *Algorithm
   * 1. Sort the numbers,
   * 2. Use 2 variable, one for index and one for current value,
   * 3. Iterate through the loop until val <= length of array (As the arra of length n must contain number [1...n])
   * 4. Run another while loop to increment index until current val of num is less than val,
   * 5. Check if current val is qual to current nums el, if not then insert in res arr,
   * 6. Increment val
   */
  nums.sort((a, b) => a - b);
  let res = [];
  let idx = 0;
  let val = 1;
  while (val <= nums.length) {
    while (nums[idx] < val) idx++;
    if (nums[idx] != val) res.push(val);
    val++;
  }
  return res;
};

console.log(findDisappearedNumbers([1, 1]));
