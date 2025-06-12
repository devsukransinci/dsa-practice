/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function (matrix) {
  /**
   * Algorithm
   * 1. Use first ro and col as pointer whether that row/col should be marked as zero or not
   * 2. Sepial scenario (Frst row wil be in matrix[0][0]), use a separate variable for 1st column
   * 3. Iterate throw the matrix and update first row/col to 0 as a marker whether it shou,d be 0
   * 4 Iterate throw the matrix again and update all rows and cl to 0
   * 5. Handle first row using nother for loop
   * 6. Handle first col (Using flag) using another for loop
   * 
   */
  // O(n)
  let rowZero = false;

  // Determine whic row/col to be zero
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        // Set first row's col as 0
        matrix[0][j] = 0;

        // Set first col's row as 0 skipping first row
        // Skip first row because fisrt col is haded by a flag in else par
        if (i > 0) matrix[i][0] = 0;
        else rowZero = true;
      }
    }
  }

  // Reiterate and mark all a zero
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[0][j] == 0 || matrix[i][0] == 0) matrix[i][j] = 0;
    }
  }

  // Handle first row
  if (matrix[0][0] == 0) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }

  // Handle first col
  if (rowZero == true) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0;
    }
  }
  console.table(matrix);
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroesUnoptimised = function (matrix) {
  // O(m*n)
  // Array containing indexes of zero
  let indexes = [];

  // Search for 0 elements
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) indexes.push({ i, j });
    }
  }
  // Set row and col as zero
  indexes.forEach((itr) => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (itr.i === i) matrix[i][j] = 0;
        if (itr.j === j) matrix[i][j] = 0;
      }
    }
  });
};

setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);

setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]);
