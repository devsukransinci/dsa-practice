/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // . -> 0 or mroe of any character
  
  // * -> Zero or more of preceding element
  const sLen = s.length;
  const pLen = p.length;

  // If pattern is empty tthen check if string is empty
  if (pLen === 0) return sLen === 0;

  // Either first character of string, pattern are same or pattern is '.'
  let first_match = sLen !== 0 && (p[0] === s[0] || p[0] === '.');

  // If a star is present in the pattern, it will be in the
  // second position p[1]. Then, we may ignore this part of
  // the pattern, or delete a matching character in the text.
  // If we have a match on the remaining strings after any of
  // these operations, then the initial inputs matched.

  if (pLen >= 2 && p[1] === '*') {
    // no match:  aa , c*       ||      match:       aaa , a*
    return (
      isMatch(s, p.substring(2)) || (first_match && isMatch(s.substring(1), p))
    );
  } else {
    // Recursivel call n by removing 0th Character
    return first_match && isMatch(s.substring(1), p.substring(1));
  }
};

console.log(isMatch('aa', 'a*')); // Dont match
console.log(isMatch('aa', 'a')); // Dont match
console.log(isMatch('a', '')); // Dont match
console.log(isMatch('', '')); // Match
