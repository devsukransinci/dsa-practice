/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const INT_MIN = Math.pow(2, 31) * -1;
  const INT_MAX = Math.pow(2, 31) - 1;
  let ans = 0;
  let counter = 0;
  let sign = 1;

  // Remove trailing spaces
  
  while (str[counter] === ' ') counter++;

  // Check if number is positive or negative
  if (str[counter] === '-' || str[counter] === '+') {
    sign = str[counter] === '-' ? -1 : 1;
    counter++;
  }
  // Check if the next character is a number and append it to ans
  while (str[counter] >= '0' && str[counter] <= '9') {
    ans = ans * 10 + (str[counter] - 0);
    // If ans is greater than INT_MAX, return INT_MAX
    if (sign === 1 && ans > INT_MAX) return INT_MAX;
    // If ans is less than INT_MIN, return INT_MIN
    if (sign === -1 && ans * -1 < INT_MIN) return INT_MIN;
    counter++;
  }

  return ans * sign;
};

console.log(myAtoi('-91283472332'));
console.log(myAtoi('   +42'));
console.log(myAtoi('-42'));
console.log(myAtoi('  -42'));
