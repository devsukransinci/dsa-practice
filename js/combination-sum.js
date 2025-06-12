/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  /**
   * Algorithm
   * Description
   * Recurvie add each element with every other elemnt until sum is equal to target
   * If Equal to target then save the combination of number,
   * 
   * Algorithm
   *
   * 1. Creae a recursive mthod with position, currentCombination, totl
   *  a. If total is same a target, then push currentCOmbination array to result
   *  b. If total > target OR i becomes larger than main arrray then stop
   *  c. Push the curent el in combination Arr -> call recursive method (postion, currentCombination, total + current el)
   *  d. Remove current el
   *  c. Call the recusrvie method again by moving to net el (position + 1, curent, total)
   * 2. Make first call to recurvie method using (0, [], 0)
   */
  let res = [];

  const dfs = (i, curr, total) => {
    if (total === target) {
      res.push([...curr]);
      return;
    }

    if (i >= candidates.length || total > target) {
      return;
    }

    curr.push(candidates[i]);
    dfs(i, curr, total + candidates[i]);
    curr.pop();
    // We cannot use ith value anymore
    dfs(i + 1, curr, total);
  };

  dfs(0, [], 0);
  return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));
