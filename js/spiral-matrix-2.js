/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  /**
   * Algorithm
   * 1. Take 4 pointers for 4 corner
   * 2. While left is less than right and top < bottom keep iterating
   * 3. Go from left to right and insernt value in first row, go from top bottom and insert in last column, keep repeating
   */
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;

  // Create a 2D Array
  let result = Array(n) // []
    .fill()
    .map((_) => Array(n)); // [[][][]]
  let counter = 1;

  while (left <= right && top <= bottom) {
    // From left to right
    for (let i = left; i <= right; i++) {
      result[top][i] = counter;
      counter++;
    }
    top++;

    // From top to Bottom
    for (let i = top; i <= bottom; i++) {
      result[i][right] = counter;
      counter++;
    }
    right--;

    // From right to left
    for (let i = right; i >= left; i--) {
      result[bottom][i] = counter;
      counter++;
    }
    bottom--;

    // From bottom to top
    for (let i = bottom; i >= top; i--) {
      result[i][left] = counter;
      counter++;
    }
    left++;
  }

  return result;
};

console.table(generateMatrix(3));
