/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  /**
   * Steps
   * SPlit the words
   * Store value: Key mapping in one map and jus keys in another
   * Iterate through the split words and check f they already exist and value alreay exit, if not then add
   * Else
   *    a. Chec if the value of map is qual to pattern or not, if no then return fals
   */
  let temp = s.split(' ');
  if (temp.length != pattern.length) return false;
  let map = new Map();
  let val = new Map();
  for (let i = 0; i < temp.length; i++) {
    const element = temp[i];
    if (!map.get(element) && !val.get(pattern[i])) {
      map.set(element, pattern[i]);
      val.set(pattern[i], 1);
    } else {
      if (map.get(element) != pattern[i]) return false;
    }
  }
  return true;
};

console.log(wordPattern('abba', 'dog cat cat dog'));
