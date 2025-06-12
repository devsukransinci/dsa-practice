/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  /**
   * Algorithm
   * 1. Interate throw rows and cols using 2 for loop
   * 2. Store row as (index)value, col as value(index), row-col combination as (row-group)value(col-group) in a set
   * 3. Check if they arent alreay present in set, if yes then return false
   * 4. Return true
   * 
   * Row and col group explanation
   * (${~~(m / 3)})${item}(${~~(n / 3)})
   * Each group consists of square with 9 boxes and there are total of 9 groups
   * Dividing index by 3 gives the group it belongs to
   * Eg. [4, 1] Belongs to [4/3,1/3]  which is [1 st row roup, 0th col group]
   */
  const set = new Set();
  // (m)v, v(n), (m)v(n)
  for (let m = 0; m < board.length; m++) {
    for (let n = 0; n < board[m].length; n++) {
      const item = board[m][n];
      if (item === '.') continue;
      const row = `(${m})${item}`; // (0)5
      const col = `${item}(${n})`;
      const rc = `(${~~(m / 3)})${item}(${~~(n / 3)})`; // row col combination

      console.log(row + ' ' + col + ' ' + rc);
      if (!set.has(row) && !set.has(col) && !set.has(rc)) {
        set.add(row);
        set.add(col);
        set.add(rc);
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
