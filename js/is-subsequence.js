/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  /**
   * Algorithm
   * 1. Create a index to store the current matched subsequence index
   * 2. Iterate hrough the t loop
   * 3. In Every iteration, check if subsequebe string [matchedIndex] is present in t, if yes increment the index (This will insure relative order)
   */
  let matchIndex = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[matchIndex] == t[i]) matchIndex++;
    if (matchIndex == s.length) return true;
  }

  return matchIndex == s.length;
};

console.log(isSubsequence('abc', 'ahbgdc'));
