/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  /**
   * Algorith
   * 1. Calculate the mxa sequece count = 2 to the power n,
   * 2. Iterate through while loop and perform ,
   *  -> Shift current val right by 1 -> XOR with current val (Resulnat will be a decimal number)
   * 3. Store the result in an Array.
   */
  let max = Math.pow(2, n) - 1;

  let ans = [];
  for (let i = 0; i <= max; i++) {
    console.log(i >> 1, i, i ^ (i >> 1)); // ^ 
    ans.push(i ^ (i >> 1)); // ^ -> XOR Operator
  }
  return ans;
};

console.log(grayCode(3));

/**
 * Example
 * 1 = 0001
 * 2 = 0010 -> 0001 -> 1
 * 3 = 0011 -> 0001 -> 1
 * 4 = 0100 -> 0010 -> 2
 * 5 = 0101 -> 0010 -> 2
 */
