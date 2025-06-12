/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number,
 *			      1 if num is lower than the picked number,
 *               otherwise return 0
 * var guess = function(num) {}
 */
let pickedNumber = 55;
var guess = function (num) {
  if (num < pickedNumber) return 1;
  else if (num > pickedNumber) return -1;
  else return 0;
};
/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  /**
   * Solution
   *
   * Use binary search
   * Start from 1 and max = input number
   * Loop while start is less than end
   * If guess returns 1 then picked number is greater hence start =mid
   * else end = mid
   */
  let start = 0;
  let end = n;
  while (start < end) {
    let mid = (start + end) / 2;
    let temp = guess(mid);
    if (temp == -1) {
      end = mid;
    } else if (temp == 1) {
      start = mid;
    } else return mid;
  }
  return n;
};

console.log(guessNumber(99));
