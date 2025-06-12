/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  /**
   * Algorithm
   * We can use dynamic programming
   * If we remove repeated calculatin, we end up with linear
   * If we look it from back , then its a fibonacci series
   */
  let one = 1;
  let two = 1;
  for (let i = 0; i < n - 1; i++) {
    let temp = one;
    one = one + two;
    two = temp;
  }
  return one;
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairsUnoptimised = function (n) {
  let totalPaths = 0;
  const tree = (current, remaining) => {
    if (current === n) {
      totalPaths++;
      return;
    }
    if (current > n) {
      return;
    }
    if (current + 1 <= n) tree(current + 1, remaining - current - 1);
    if (current + 2 <= n) tree(current + 2, remaining - current - 2);
  };

  tree(0, n);
  return totalPaths;
};

console.log(climbStairs(44));
