/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  /**
   * Algorithm
   * 1. Initialize rows=1 and couns required as 0
   * 2. Check if nput is less then coinsReuiqred, if yes then return rows
   * 3. Else Decrement  inout by coinsRequired
   * 4. Increment cointsRequired and rouws 
   * 
   */
  let rows = 0;
  let coinsRequired = 1;
  while (n >= 0) {
    if (n < coinsRequired) return rows;
    n = n - coinsRequired;
    coinsRequired++;
    rows++;
  }
  return rows;
};
console.log(arrangeCoins(5));
