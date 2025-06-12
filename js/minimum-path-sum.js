/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  /**
   *Algorithm
   * 1. Initialize an Array with 1 row and column extra with all value as Infinity
   * 2. Initilize [rowLength - 1][colLength] = 0 (Will be used as iniital case in first row)
   * 3. Iterate through each row and colmn from bottom right to calculate the minimum path comparing bottom and right element res[r][c] = grid[r][c] + Math.min(res[r + 1][c], res[r][c + 1])
   * 4. In last iteration, first element will have the shortest path
   *
   */
  let rowLength = grid.length;
  let colLength = grid[0].length;

  let res = Array(rowLength + 1)
    .fill()
    .map((_) =>
      Array(colLength + 1)
        .fill(Infinity)
        .slice()
    );
  res[rowLength - 1][colLength] = 0;

  for (let r = rowLength - 1; r >= 0; r--) {
    for (let c = colLength - 1; c >= 0; c--) {
      res[r][c] = grid[r][c] + Math.min(res[r + 1][c], res[r][c + 1]);
    }
  }

  return res[0][0];
};

// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
