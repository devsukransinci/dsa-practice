/**
 * @param {number} n
 * @return {boolean}
 * 
 */
var isUgly = function (n) {
  if (n <= 0) return false;
  if (n <= 5) return true;
  // Recuvervily keep divid ng until the value is either 2, 3, 5 or no more division possilbe
  for (const iterator of [2, 3, 5]) {
    if (n % iterator == 0) return isUgly(n / iterator);
  }
  return false;
};

console.log(isUgly(8));
