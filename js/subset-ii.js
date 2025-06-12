/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = [];
  nums.sort();

  /**
   * @param {number} i
   * @param {number[]} curr
   */
  const backtrack = (i, curr) => {
    if (i >= nums.length) {
      res.push(curr.slice());
      return;
    }
    // Not select an element
    curr.push(nums[i]);
    backtrack(i + 1, curr);

    // Dont select an element
    curr.pop();
    while (i + 1 < nums.length && nums[i] == nums[i + 1]) i++;
    backtrack(i + 1, curr);
  };

  backtrack(0, []);
  return res;
};

console.table(subsetsWithDup([1, 2, 2]));
