/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // Algorithm
  
  // Iterate through the input string in reverse manner
  // Compare I and I + 1, if I is small then result - 1 else result + i
  const map = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  // XIV
  // XVI
  let res = 0;
  for (let i = 0; i < s.length; i += 1) {
    // eg. IX => - 1 + 10 => 9
    // XIV => 10 - 1 + 5 => 14
    map[s[i]] < map[s[i + 1]] ? (res -= map[s[i]]) : (res += map[s[i]]);
  }
  return res;
};

console.log(romanToInt('IV')); // 4
