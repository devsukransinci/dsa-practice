/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [];
  let curr = [];

  /**
   * @param {number} i
   */
  const backtracking = (i) => {
    // Base ase -> i shoyld be <=array length
    if (i >= nums.length) {
      res.push(curr.slice());
      return;
    }

    // Not select an element
    curr.push(nums[i]);
    backtracking(i + 1);

    // Dont select an element
    curr.pop();
    backtracking(i + 1);
  };

  backtracking(0);

  return res;
};

console.table(subsets([1, 2, 3]));

