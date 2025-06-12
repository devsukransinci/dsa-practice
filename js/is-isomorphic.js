/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  /**
   * Algorithm
   * 
   * 
   * 1. Create 2 maps
   * 2. Store value of s in one map and valueof 2 in another map
   * 3. Check if length is same, if not then hey are not isomorphic for sure
   * 4. Create a new string by replacing each value of s with t 
   * 5. Check if new string is same as t 
   */
  let map = new Map();
  let map2 = new Map();
  // Store mapping in a map
  for (let i = 0; i < s.length; i++) {
    if (!map.get(s[i])) {
      map.set(s[i], t[i]);
      map2.set(t[i], s[i]);
    }
  }
  if (map.size !== map2.size) return false;
  let temp = '';

  // Replace mappings with t
  for (let i = 0; i < s.length; i++) {
    temp += map.get(s[i]);
  }
  return temp == t;
};

console.log(isIsomorphic('egg', 'add'));
