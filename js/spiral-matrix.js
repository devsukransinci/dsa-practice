/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let left = 0;
  let right = matrix[left].length;
  let top = 0;
  let bottom = matrix.length;
  let output = [];

  while (left < right && top < bottom) {
    // Left to right
    
    for (let i = left; i < right; i++) {
      output.push(matrix[top][i]);
    }
    top += 1;

    // Top to bottom
    for (let i = top; i < bottom; i++) {
      output.push(matrix[i][right - 1]);
    }
    right -= 1;

    // To handl scenarios like singlr row/col [1, 2, 3] or [1], [2], [3]
    if (!(left < right && top < bottom)) break;

    // Bottom right to bottom left
    for (let i = right; i > left; i--) {
      output.push(matrix[bottom - 1][i - 1]);
    }
    bottom -= 1;

    // Bottom left to top
    for (let i = bottom; i > top; i--) {
      output.push(matrix[i - 1][left]);
    }
    left += 1;
  }
  return output;
};

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// console.log(
//   spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// Input: [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
