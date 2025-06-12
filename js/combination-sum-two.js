/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  /**
   * Algorithm
   * 1. Sort the numbers
   * 2. Create a rescurive function with 3 param, 1. Combinaton arr, position, Current sum
   *  a. If sum=0 then push the combination arr in result arr
   *  b. If sum is negative then return,
   *  c. Itegrate through the main array from current position to last element
   *    -> If prev el is same as current then skip
   *    -> Push currentn el, recusrive call fn as cmbination arr, i+1, sum - current el
   *    -> Pop current el (Push pop logic is performed to alow us to create a new resultant array)
   * 3. Call the recurvice method
   */

  candidates.sort((a, b) => a - b);
  let res = [];
  const backtrack = (cur, position, targ) => {
    if (targ === 0) res.push([...cur]);
    if (targ <= 0) return;

    let prev = -1;

    for (let i = position; i < candidates.length; i++) {
      if (candidates[i] === prev) continue; // Because we dont want reoeated cobination cretion
      cur.push(candidates[i]);
      backtrack(cur, i + 1, targ - candidates[i]);
      cur.pop();
      prev = candidates[i];
    }
  };

  backtrack([], 0, target);
  return res;
};

console.table(combinationSum2([2, 5, 2, 1, 2], 5));
console.table(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
