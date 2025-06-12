/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  /**
   * Algorithm
   * 1. Create a result array,
   * 2. Create a recursive method that takes remaining rigt, left bracket and current combination,
   *   Remaining left bracket cannot b less than right,
   *   If left brnach are greator than 0, then append ( to string and decrement left by recursively calling method,
   *   Repeat the same for right,
   *   If right and left are both exhausted, then store the combination in arry,
   * 3. Call the recovurive method with left and right equal to input number, empty string,
   * 4. Return result,
   */

  let results = [];
  const tree = (leftRemaining, rightRemaining, combination) => {
    if (leftRemaining > rightRemaining) return;

    if (leftRemaining === 0 && rightRemaining === 0) results.push(combination);

    if (leftRemaining > 0)
      tree(leftRemaining - 1, rightRemaining, combination + '(');
    if (rightRemaining > 0)
      tree(leftRemaining, rightRemaining - 1, combination + ')');
  };

  tree(n, n, '');
  return results;
};

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(4));

// 1 -> ()
// 2 -> ()() (())
// 3 -> ((())) (()()) (())() ()(()) ()()()
