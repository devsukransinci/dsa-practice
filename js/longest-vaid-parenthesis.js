/**
 * 
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let maxlen = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 2; j <= s.length; j += 2) {
      if (isValid(s.substring(i, j))) {
        maxlen = Math.max(maxlen, j - i);
      }
    }
  }
  return maxlen;
};

const isValid = (s) => {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      stack.push('(');
    } else if (!stack.length && stack[0] == '(') {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length;
};

console.log(longestValidParentheses('(()'));
// console.log(longestValidParentheses('()()')) ;
console.log(longestValidParentheses('()())'));
