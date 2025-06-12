/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  /**
   * Algorithm
   * 1. Find the row in which data exist using binary search
   * 2. Find the col in which data exist unisng binrary search
   */

  // Search for the row first
  let colLength = matrix[0].length - 1;
  let start = 0;
  let end = matrix.length - 1;
  let row = null;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target > matrix[mid][colLength]) {
      start = mid + 1;
    } else if (target < matrix[mid][0]) {
      end = mid - 1;
    } else {
      // Found row
      // Start ad end both will be same here equal to mid
      row = mid;
      break;
    }
  }

  if (row == null) return false;

  // Find Column
  start = 0;
  end = colLength;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target > matrix[row][mid]) {
      start = mid + 1;
    } else if (target < matrix[row][mid]) {
      end = mid - 1;
    } else {
      // Found
      return true;
    }
  }

  return false;
};

console.log(searchMatrix([[1], [3], [5]], 3));

// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     8
//   )
// );
