/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // Brute force
  // Backtracking
  // Go through every single word
  /**
   * 
   * Algorithm
   *
   * 1. Compare each element with the starting element of the string
   * 2. If matches then go to next element and checm if any adjcent element matches the next element
   * 4. Keep repeating this recusrively
   */
  let rowLength = board.length;
  let colLength = board[0].length;
  let path = new Set();
  const dfs = (r, c, i) => {
    // Base case when ord is found
    if (i == word.length) return true;

    // Exit when rows/cols are negaive, current index dnt match with bord[r][c], row/col greater then length, if row col combination already checked
    if (
      r < 0 ||
      c < 0 ||
      r >= rowLength ||
      c >= colLength ||
      word[i] != board[r][c] ||
      path.has(`${r},${c}`)
    )
      return false;

    // Match is a success
    path.add(`${r},${c}`);

    // Chek left, top, right, below element
    let res =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    // Try another path by removing current lement
    path.delete(`${r},${c}`);
    return res;
  };

  // Check every element if it matches
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  return false;
};

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  )
);
