/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  /**
   * Algorithm
   * 
   * 1. Create an Array with mapping of each number with letter, Create a result array
   * 2. If no input then no combination possible
   * 3. Create a fn (pos, str) that recursively creates a pairing of each number with other number using for loop
   * 4. Cal the recusrive fn once
   */

  if (!digits) return [];
  let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  let res = [];

  /**
   * @param {number} position
   * @param {string} str
   * @return {void}
   */
  const df = (position, str) => {
    if (position === digits.length) {
      res.push(str);
      return;
    }

    for (const c of map[digits[position]]) {
      df(position + 1, str + c);
    }
  };

  df(0, '');
  return res;
};

console.log(letterCombinations('23'));
