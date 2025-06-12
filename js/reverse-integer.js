/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let ans = 0;
  while (x !== 0) {
    let pop = x % 10;
    x = parseInt(x / 10);
    ans = ans * 10 + pop;
  }
  // Check if its a 32bit signed nteger
  
  if (ans > Math.pow(2, 31) * -1 && ans < Math.pow(2, 31) - 1) {
    return ans;
  } else return 0;
};

console.log(reverse(123));
