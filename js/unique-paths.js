/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  /**
   * Algorithm
   * 1. Start from bottom right corner and come to first element in top left
   * 2. Create the bottom first row with items as 1 (Posible way o reaching there will always be one)
   * 3. Move to secondlast row and add col + 1th item (Posible ways to each there will be total ays to reach bottom el and total ways to reach right element)
   * 4. Keep repeating until reachd the top most row
   *
   * m*n as 3*7
   *
   * -----------------------------------------
   * |24|21|15|10|6|3|1| <-- Second Iteration
   * |7 |6 |5 |4 |3|2|1| <-- First Iteration
   * |1 |1 |1 |1 |1|1|1| <-- Initial Array
   * 
   * 0th Element will be the result
   */
  let row = Array(n)
    .fill()
    .map((_) => 1);

  let newRow = row.slice();
  for (let i = 0; i < m - 1; i++) {
    // 2nd row from bottom, 3rd, 4th....topmost row
    for (let j = n - 2; j > -1; j--) {
      // Start from secondlsat item in right (Rightmost will always be 1)
      console.log(`Row: ${i} Col: ${j} Val: ${newRow[j + 1] + row[j]}`);
      newRow[j] = newRow[j + 1] + row[j];
    }
    row = newRow;
  }

  return row[0];
};

// Input: (m = 3), (n = 7);
// Output: 28;
console.log(uniquePaths(3, 7));
