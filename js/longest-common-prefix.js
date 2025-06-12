/**
 * 
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return 0;
  let prefix = strs[0];
  let longestPrefix = '';
  for (let i = 1; i <= prefix.length; i++) {
    let temp = prefix.substring(0, i);
    if (strs.every((st) => st.startsWith(temp))) longestPrefix = temp;
  }
  return longestPrefix;
};

// strs = ["flower","flow","flight"] => "fl"
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['a']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['flower', 'flower', 'flower', 'flower']));
console.log(longestCommonPrefix(["c","acc","ccc"]));
