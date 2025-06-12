/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  /**
   * Algorithm
   * 1. Create a array to store all opening parenthesis
   * 2. Iterate through the input
   * 3. If its opening parenthesis then store in array and skip iteration
   * 4. Else pop element and check if curet element is closing parenthesis on the popped item (If not then return false)
   * 5. Return true if stack if empty afte iteating the for loop
   */

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === '(' || element === '{' || element === '[') {
      stack.push(element);
      continue;
    }

    const pop = stack.pop();
    if (element === ')' && pop !== '(') return false;
    else if (element === ']' && pop !== '[') return false;
    else if (element === '}' && pop !== '{') return false;
  }
  return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
