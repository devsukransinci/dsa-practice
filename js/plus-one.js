/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  /**
   * Algorithm
   * 1. Loop throught the digits from back
   * 
   * 2. Increment number, if there is a carry then store it in a variable
   * 3. Keep ierating intil a carry is creaed on incremnt else return immediately
   * 
   */
  let carry = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + 1 > 9) {
      carry = 1;
      digits[i] = 0;
    } else {
      carry = 0;
      digits[i]++;
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([8]));
