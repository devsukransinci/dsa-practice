/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  // Use two pointeers
  
  let tempStr = s.split('');
  let left = 0;
  let right = s.length - 1;
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  while (left < right) {
    // Look for first vowel from left
    while (left < right && !vowels.includes(tempStr[left])) {
      left++;
    }

    // Look for first vowel from right
    while (left < right && !vowels.includes(tempStr[right])) {
      right--;
    }
    // Swap
    let temp = tempStr[right];
    tempStr[right] = tempStr[left];
    tempStr[left] = temp;
    // Increment last itme
    left++;
    right--;
  }
  return tempStr.join('');
};

console.log(reverseVowels('leetcode'));
