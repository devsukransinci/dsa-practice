/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  /**
   *Algorithm
   *
   * 1. Create a reursive function with base case as combination=k,
   * 2. Iterate through the loop from start to <= n and insert current number in combination, recurively call the fn, pop the element inserted in combnation
   */
  let res = [];

  /**
   *
   * @param {number} starting
   * @param {number[]} combination
   * @returns void
   */
  const generate = (starting, combination) => {
    if (combination.length === k) {
      res.push(combination.slice());
      return;
    }

    for (let i = starting; i <= n; i++) {
      combination.push(i);
      generate(i + 1, combination.slice());
      combination.pop(); // Removes urrently inserted value and replace with anothe
    }
  };

  generate(1, []);
  return res;
};

console.log(...combine(4, 2));
