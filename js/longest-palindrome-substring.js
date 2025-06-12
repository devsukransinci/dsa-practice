/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function (s) {
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    //loop through each character
    let oddPalindrome = true; //bool to check whether palindrome is odd or even in length
    let lenOdd = expandAroundCenter(s, i, i); //length of odd palindrome
    let lenEven = expandAroundCenter(s, i, i + 1); //length of even palindrome
    let lenMax = Math.max(lenOdd, lenEven); //get the max
    if (lenMax === lenEven) {
      oddPalindrome = false;
    }
    // Compare Maxlength with current length
    if (lenMax > end - start + 1) {
      if (oddPalindrome) {
        //odd case
        //make sure to floor since javascript has no types
        start = i - Math.floor(lenMax / 2); //since i is the center/ divide length by two and subtract
        end = i + Math.floor(lenMax / 2); //vice versa
      } else {
        start = i - lenMax / 2 + 1; //center is off by 1 so add one. no floor since length is even
        end = i + 1 + lenMax / 2 - 1; //center is forward by one so substract one
      }
    }
  }
  return s.substring(start, end + 1); //dont for get that substr function xs [x,y)
};

let expandAroundCenter = function (s, left, right) {

  //first two conditions prevent an infinite loop,
  //second condition verifies its a palindrome
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  //the loop will exit once it verifies that there isn't a palindrome any more. So L and R are both off by one.
  //correct off by one error,
  right = right - 1;
  left = left + 1;
  // Caculate the length of the palindrome
  return right - left + 1;
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('bbaabb'));
