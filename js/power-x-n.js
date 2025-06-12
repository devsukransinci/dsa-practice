/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  /**
   * 
   * Simple for loop ont work coz well end up handling lots of redundant scnearios
   */
  /** */
  let helper = (x, n) => {
    if (x === 0) return 0;
    if (n === 0) return 1;
    let res = helper(x, Math.floor(n / 2)); // 2^10 -> 2^5 + 2^5, 2^5 -> 2^2 + 2^2 + 2^1
    res = res * res;
    return n % 2 ? x * res : res;
  };
  let res = helper(x, Math.abs(n));
  return n < 0 ? 1 / res : res;
};

console.log(myPow(2, 10));
console.log(myPow(2, -2));
