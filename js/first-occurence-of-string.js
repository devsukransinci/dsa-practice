/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  /**
   *Algorithm
   * 
   * 1. Iterage through the string character,
   * 2. Check if Subtring starting from ith pos to needle.length pos matches needle.
   */
  if (!needle) return -1;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    };
  }
  return -1;
};

console.log(strStr('leetcode', 'leeco'));
console.log(strStr('leetcode', 'leet'));
