/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * 
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid.length === 1) {
    for (let i = 0; i <= obstacleGrid[0].length - 1; i++) {
      if (obstacleGrid[0][i] === 1) return 0;
    }
    return 1;
  }
  // If endpoint is obstacle then alwaus 0
  if (obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] === 1)
    return 0;

  let row = Array(obstacleGrid.length)
    .fill()
    .map((_, idx) =>
      obstacleGrid[obstacleGrid.length - 2][idx] === 1 ||
      obstacleGrid[obstacleGrid.length - 1][idx]
        ? 0
        : 1
    );

  let newRow = row.slice();
  for (let i = 0; i < obstacleGrid[0].length - 1; i++) {
    for (let j = obstacleGrid.length - 2; j >= 0; j--) {
      if (obstacleGrid[i][j] === 1) newRow[j] = 0;
      else newRow[j] = newRow[j + 1] + row[j];
    }
    row = newRow;
  }

  return newRow[0];
};

console.log(uniquePathsWithObstacles([[1]]));

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);

console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ])
);
