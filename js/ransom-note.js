/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  
  /**
   * Algorithm
   * Steps
   * 
   * 1. Create a map from Magazine to store the letter and count of occurence
   * 2. Iterate through ransonNote and check if value exists in map and then decremnt, else return fale
   * 3. Reurn true
   */
  let map = new Map();
  for (let i = 0; i < magazine.length; i++) {
    let temp = map.get(magazine[i]);
    if (temp) {
      map.set(magazine[i], temp + 1);
    } else map.set(magazine[i], 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const element = map.get(ransomNote[i]);
    if (element) {
      map.set(ransomNote[i], element - 1);
    } else return false;
  }
  return true;
};

console.log(canConstruct('aa', 'abb'));
