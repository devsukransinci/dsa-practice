/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 */
var isAnagram = function (s, t) {
  let map = new Map();
  // Creat a map of chratcer
  for (let i = 0; i < s.length; i++) {
    if (!map.get(s[i])) {
      map.set(s[i], 1);
    } else {
      let temp = map.get(s[i]);
      map.set(s[i], temp + 1);
    }
  }

  // Check if data is fine
  for (let i = 0; i < t.length; i++) {
    const temp = t[i];
    if (!map.get(t[i])) return false;
    else {
      // Decement counter , or remov if 0
      let curr = map.get(t[i]);
      if (curr - 1 == 0) map.delete(t[i]);
      else map.set(t[i], curr - 1);
    }
  }
  return map.size == 0;
};

console.log(isAnagram('anagram', 'anagarm'));
