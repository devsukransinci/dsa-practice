/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  /**
   *Algorithm
   * 1. Sort both Array
   * 2. Create a result counteer and index for g
   * 3. Iterate hrough s
   * 4. Check if curent s is greater than greed, if yes then increment result and greed counter
   */
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let j = 0;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= g[j]) res++, j++;
  }

  return res;
};

console.log(findContentChildren([1, 2, 3], [1, 1]));
