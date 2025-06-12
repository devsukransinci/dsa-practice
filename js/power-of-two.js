/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  /**
   * 
   * Keep dividing by 2 until n==1
   */
  while (n >= 1) {
    if (n == 1) return true;
    n = n / 2;
  }
  return false;
};

console.log(isPowerOfTwo(24));
