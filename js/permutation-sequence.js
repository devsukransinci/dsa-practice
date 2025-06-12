/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutationUnoptimised = function (n, k) {
  // Generate permutation string
  let str = '';
  for (let i = 1; i <= n; i++) {
    str += i;
  }
  let permutationsList = [];
  let permutations = (current, remaining) => {
    if (remaining.length === 0) {
      permutationsList.push(current);
      return;
    } else {
      for (let i = 0; i < remaining.length; i++) {
        current += remaining[i];
        permutations(
          current,
          remaining.slice(0, i).concat(remaining.slice(i + 1))
        );
        current = current.slice(0, -1);
      }
    }
  };
  permutations('', str);
  return permutationsList[k - 1];
};

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  // Calculate factorials
  let facts = Array(n)
    .fill()
    .map((_, i) => i + 1);

  let factorialize = (number) => {
    if (number <= 1) return 1;
    return number * factorialize(number - 1);
  };

  let ans = '';

  let generateResult = (n, k) => {
    if (n <= 0) return facts[0];
    
    // Clculate the zie of block (Number of permutation with same firs digit) i.e (n-1)!
    let sizeOfBlock = factorialize(n - 1);
    // Clculate the block in which k exist using (k/sizeof block)
    // Edge case scenario, if k%(n-1) is 0 - then decerement block by one
    let index = Math.floor(k / sizeOfBlock);
    if (k % sizeOfBlock === 0) index--;
    // Update the result
    ans += facts[index];
    // Remove the result from he ara
    facts.splice(index, 1);
    // Calculate new k
    k = k - sizeOfBlock * index;
    generateResult(n - 1, k);
  };
  generateResult(n, k);
  return ans;
};

console.table(getPermutation(3, 3));
console.table(getPermutation(4, 9));

/**
 * Optimised Solution
 *
 * 1. Create a lst containing all factoril values
 * 2. Clculate the zie of black (Number of permutation with same firs digit) i.e (n-1)!
 * 3. Clculate the block in which k exist using (k / sizeof block)
 * 4. Resultant will give the most signigicat digit
 * 5. Remove the resultant from factorial values array
 * 6. Calculate ne K using K - (size of block* eleemnts in each block)
 */
