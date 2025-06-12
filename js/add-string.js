/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  /**
   * 
   * Algorithm
   * 1. Calculate  the length of nth srings and take a sum= '' and carry =0 variable
   * 2. Loop when i, j are >= 0 or carry > 1
   * 3. Typecast the individual number to integer
   * 4. Sum the number + carr
   * 
   * 5. Append the new sum at start of sum string
   *    If >1 then newSum%10 else newSum
   * 6. Check if carryexists
   * 7. Return sum after loop is complete
   */
  let i = num1.length - 1;
  let j = num2.length - 1;
  let sum = '';
  let carry = 0;
  while (carry > 0 || i >= 0 || j >= 0) {
    const digit1 = num1.charAt(i) - '0'; // To convert to number
    const digit2 = num2.charAt(j) - '0';
    const digitSum = digit1 + digit2 + carry;

    sum = (digitSum >= 10 ? digitSum % 10 : digitSum) + sum;
    carry = digitSum >= 10 ? 1 : 0;

    i--;
    j--;
  }
  return sum;
};

console.log(addStrings('100', '99'));
