/**
 * @param {number} x
 * @return {number}
 * 
 */
var mySqrt = function (x) {
  if (x == 0) return 0;
  let start = 1;
  let end = x / 2 + 1;
  while (start <= end) {
    let mid = Math.ceil(start + (end - start) / 2); // Remove all deimals
    if (mid * mid === x) return mid;
    else if (mid * mid < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return end;
};

/**
 * @param {number} x
 * @return {number}
 */
var mySqrtLinear = function (x) {
  let counter = 1;
  while (counter * counter <= x) {
    counter++;
  }
  return counter - 1;
};

console.log(mySqrt(1));
