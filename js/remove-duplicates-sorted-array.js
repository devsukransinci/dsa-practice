/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  /**
   * Algorithö
   *
   *
   * 1. Iterate throug ht list
   * 2. Mark the dulicates as X using a temp variable and counter
   *  - Use a counter to store the count
   *  - If number matches and count is not yet 2 , then increment count
   *  - If number matches and count greater or equal to 2 then mark it as null and increment counter
   *  - else reset counter for a different element
   * 3. Iterate one more time and remove all X values
   */

  // Iterate anf mark duplicates
  let temp = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == temp && count < 2) {
      count++;
    } else if (nums[i] == temp && count >= 2) {
      count++;
      nums[i] = null;
    } else {
      count = 1;
      temp = nums[i];
    }
  }

  // Remove all X
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != null) continue;
    nums.splice(i, 1);
    i--;
  }
  console.log(nums);
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
