/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  
  // While whitespace remove them
  // Calculate length until we reach a space or the counter is greater than 0
  let i = 0;
  let counter = s.length - 1;
  while (s[counter] === ' ') counter--;
  while (s[counter] !== ' ' && counter >= 0) {
    i++;
    counter--;
  }
  return i;
};

// Input: s = "Hello World"
// Output: 5

console.log(lengthOfLastWord('Hello World'));

// Input: s = "   fly me   to   the moon  "
// Output: 4
console.log(lengthOfLastWord('   fly me   to   the moon  '));
