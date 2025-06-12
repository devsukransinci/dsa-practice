/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /**
   *Algorithm
   * *
   * 1. Create two pointers and a variable to stor max profile
   * 2. Iterate throug prices while right (Sell) pointer is less than last item
   * 3. If left < right (Stocks went up) then calculate new profile and calculate max profit
   *    else Assign right to left (Make sell price as bying orice)
   *  4. INcrement right (Sell pointer) in each iteration
   */
  let maxProfit = 0;
  let left = 0; // Buting
  let right = 1; // Selling
  while (right < prices.length) {
    // Stockes are buyable as the prices incresed later
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      maxProfit = Math.max(profit, maxProfit);
    }
    // Stock pricess fell so incremnt left to right
    else {
      left = right;
    }
    // INcrement right pointer in ach iteration
    right++;
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
