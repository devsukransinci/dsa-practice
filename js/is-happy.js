/**
 * 
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let visit = {};
  while (!visit[n]) {
    if (!visit[n]) visit[n] = 1;
    n = squareSum(n);
    if (n == 1) return true;
  }
  return false;
};

/**
 
 * @param {number} n
 */
function squareSum(n) {
  let res = 0;
  n.toString()
    .split('')
    .forEach((i) => (res += Math.pow(+i, 2)));
  return res;
}

console.log(isHappy(19));
