/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  /**
   *Algorithm
   *
   * 1. Create a map and store count,
   * 2. Iterate through map and see first element having count as 1 tenn return 1,
   * 3. Reurn -1 after iteration of loop.
   */
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (!map.get(element)) {
      map.set(element, 1);
    } else {
      map.set(element, map.get(element) + 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return i;
  }
  return -1;
};

console.log(firstUniqChar('aabb'));
