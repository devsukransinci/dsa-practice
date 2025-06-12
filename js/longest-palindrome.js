/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  /**
   * Algorithm
   * 1. Create a var to store result and anther for a map
   * 2. Itegrate through the string
   * 3. Check if its resent
   *    If not then insert with count 1
   *    Else set count to 0 and incremnt result by 2
   * 4. Check if Input string length and result vlue are same, then return result elese 
   *    its a odd palindrome so increment 1
   */
  let res = 0;
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]] = 0;
      res += 2;
    }
  }
  return s.length == res ? res : res + 1;
};

console.log(longestPalindrome('abccccdd'));
