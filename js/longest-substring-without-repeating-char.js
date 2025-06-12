/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //
  //Algorithm

  // 1. If length less than 2 then there are no repeating character
  // 2. Travers through array and store unique entry in the map and append the resilt String
  // 3. If the character is already present in the map then 
  // -> Store the larger string in prevString
  // -> remove the character from the map
  // ->reset result string
  // -> move the pointer to repeted item again
  // 4. Return the length of result or prevResult whicever is larger
  if (s.length < 2) {
    return s.length;
  }
  let result = '';
  let prevResult = '';
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      result += s[i];
      map[s[i]] = i;
    } else {
      if (result.length > prevResult.length) {
        prevResult = result;
      }
      result = '';
      i = map[s[i]];
      map = {};
    }
  }
  if (prevResult.length < result.length) return result.length;
  else return prevResult.length;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringOptimized = function (s) {
  // Algoright
  // Create a map, a variable for current count = 0  and max count = 0
  // Traverse through the string
  // If character is unique in map then increment current counter
  // Else Reset counter to distance betweencurrent and last repeating character
  // Storage max of ucrrent and max count in maxCounter
  // Store the current character in a map
  if (s.length < 2) {
    return s.length;
  }
  let map = {};
  let res = 0;
  let maxRes = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      res += 1;
    } else {
      // Res will be distance between current index and last index of the repeating character
      // Checing min to ensure checing of closest repeating character
      res = Math.min(res + 1, i - map[s[i]]);
    }
    maxRes = Math.max(maxRes, res);
    map[s[i]] = i;
  }
  return maxRes;
};

// Input s = "abcabcbb"
// Output: 3
console.log(lengthOfLongestSubstring('abcabcbb'));
// Input s = "bbbbb"
// Output: 1
console.log(lengthOfLongestSubstring('bbbbb'));
// Input s = "pwwkew"
// Output: 3
console.log(lengthOfLongestSubstring('pwwkew'));
// Input s = " "
// Output: 1
console.log(lengthOfLongestSubstring(' '));
// Input s = "au"
// Output: 2
console.log(lengthOfLongestSubstring('au'));
// Input s = "aab"
// Output: 2
console.log(lengthOfLongestSubstring('aab'));
// Input s = "abba"
// Output: 2
console.log(lengthOfLongestSubstring('abba'));
