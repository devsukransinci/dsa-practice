/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  /**
   * Algorithm
   * Description
   * Rotte the cornermost values
   * Move to right/down/left/up and roate
   * Rotate by storing first variabl in temp and keep recplacing variable in reverse order
   * 
   * Algorithm
   * 1. Initialze left and right as the 0 and nth el
   * 2. Iteg=rate until let is less than right, increment left and decremenet right after each itr
   * 3. Iterate trhough forloop unntil i < right - left coz we have to skip the last row each time
   */

  let left = 0;
  let right = matrix.length - 1;

  while (left < right) {
    for (let i = 0; i < right - left; i++) {
      let top = left;
      let bottom = right;
      // i -> Move to next square in each iteration
      // Save top left
      let topLeft = matrix[top][left + i]; // +i => MOve right
      // Move bottom left to top left
      matrix[top][left + i] = matrix[bottom - i][left]; // +i => MOve right, -i => Move up
      // move buttom right to bottom left
      matrix[bottom - i][left] = matrix[bottom][right - i]; // -i => MOve up after each iteraton, -i => Move left
      // Move top rigt to bottom right
      matrix[bottom][right - i] = matrix[top + i][right]; // -i => MOve left after each iteraton, +i => move down after each itr
      // Original value to top right
      matrix[top + i][right] = topLeft; // +i => Move down after each iteration
    }
    right--;
    left++;
  }
  console.log(matrix);
};

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
