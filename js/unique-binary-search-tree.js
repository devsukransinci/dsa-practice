/**
 * @param {number} n
 * @return {number}
 * 
 */
var numTrees = function (n) {
  let numTree = Array(n + 1).fill(1); // n+1 because we are going from 0

  for (let i = 2; i < n + 1; i++) {
    let total = 0;
    for (let j = 1; j < i + 1; j++) {
      let left = j - 1;
      let right = i - j;
      total += numTree[left] * numTree[right];
    }
    numTree[i] = total;
  }
  return numTree[n];
};

console.log(numTrees(3));
