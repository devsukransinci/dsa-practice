/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  /**
   * Algorithm
   * 
   *
   * 1. Double the string
   * 2. Delete first and last eemnt
   * 3. Check if input string exist in the newly formd srting
   */
  return s.repeat(2).slice(1, -1).includes(s);
};

console.log(repeatedSubstringPattern('abab'));
