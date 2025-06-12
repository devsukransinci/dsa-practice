/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 
 */
var reverseString = function (s) {
  const length = s.length;
  for (let i = 0; i < length / 2; i++) {
    let endIdx = length - 1 - i;
    let temp = s[endIdx];
    s[endIdx] = s[i];
    s[i] = temp;
  }
  return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
