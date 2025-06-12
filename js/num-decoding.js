/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {

  let dp = { [s.length]: 1 };

  const inRange = (num, num1, num2) =>
    Math.min(num1, num2) <= num && Math.max(num1, num2) >= num;

  /**
   * @param {number} i
   * @returns number
   */
  const dfs = (i) => {
    if (dp[i]) return dp[i]; // Avoid repition,
    if (s[i] == '0') return 0; // Invalid value
    let res = dfs(i + 1);

    if (
      i + 1 < s.length && // 2 digit
      (s[i] == '1' || (s[i] == '2' && inRange(+s[i + 1], 0, 6)))
    )
      res += dfs(i + 2);
    dp[i] = res;
    console.log(dp);
    return res;
  };
  return dfs(0);
};

console.log(numDecodings('226'));
