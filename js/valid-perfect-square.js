/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let temp = Math.sqrt(num);
  return Math.floor(temp) == temp;
};

console.log(isPerfectSquare(16));
/**
 * 
 * 4 -> 2
 * 9 -> 3
 * 16 -> 4
 * 25 -> 5
 */
