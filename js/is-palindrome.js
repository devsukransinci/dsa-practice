/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  const isAlphanumeric = (temp) => {
    let char = temp.toLowerCase();
    return (
      (97 <= char.charCodeAt(0) && char.charCodeAt(0) <= 122) ||
      (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57)
    );
  };
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (!isAlphanumeric(s[left]) && left < right) left++;
    while (!isAlphanumeric(s[right]) && right > left) right--;
    if (s[left].toLowerCase() != s[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
};

var isPalindromeUnoptimised = function (s) {
  let processedStr = s
    .toLowerCase()
    .split('')
    .filter(
      (f) =>
        (97 <= f.charCodeAt(0) && f.charCodeAt(0) <= 122) ||
        (f.charCodeAt(0) >= 48 && f.charCodeAt(0) <= 57)
    );
  console.log(processedStr);
  let stopIdx = Math.ceil(processedStr.length / 2);
  for (let i = 0; i < stopIdx; i++) {
    if (processedStr[i] != processedStr[processedStr.length - 1 - i])
      return false;
  }
  return true;
};

// console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('Marge, let\'s "[went]." I await {news} telegram.'));
