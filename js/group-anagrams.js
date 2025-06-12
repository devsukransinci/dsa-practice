/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  /**
   * Logic
   * For each anagram, Each string is gonna be exac same after sorting,
   * Algorithm
   * 1. Iterate through Array
   * 2. Sort the current string,
   *  a. If sorted string is not present in map then store it as key and value as unsorted strng in array
   *  b. If present then push it in value array
   * 3. Iteratre through Map and store the vales in a new array.
   */

  let mapping = {};
  for (let i = 0; i < strs.length; i++) {
    const element = strs[i];
    const sorted = element.split('').sort().join('');
    if (mapping[sorted] === undefined) {
      mapping[sorted] = [element];
    } else {
      mapping[sorted].push(element);
    }
  }
  let res = [];
  for (const iterator in mapping) {
    res.push(mapping[iterator]);
  }
  return res;
};

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
