/**
 * @param {number} num
 * @return {boolean}
 */
var isPalindrome = function (num) {
  // Algorithm
  // 1. Store num in a variable
  // 2. Create a number reverse in naother variable
  // 3. Compare both numbers

  // numCopy = 123 -> 12 -> 1 -> 0
  // reverse = 3 -> 32 -> 321
  if (num < 0) return false;
  let numCopy = num;
  let reverse = 0;
  while (numCopy > 0) {
    reverse = reverse * 10 + (numCopy % 10);
    numCopy = Math.floor(numCopy / 10);
  }
  return reverse === num;
};

/**
 * @param {number} num
 * @return {boolean}
 */
var isPalindromeUsingString = function (num) {
  // Algorthm
  // 1. Convert number to string
  // 2. Loop through string and compare first and last character
  // 3. If they are not equal return false
  // 4. If they are equal, compare second and second to last character
  let numStr = num.toString();
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] !== numStr[numStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(123));
