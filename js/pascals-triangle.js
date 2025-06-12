/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  /**
   * 
   *Algorithm
   * 1. First Array will have 1 item -> 1
   * 2. Sevond row will have 2 item -> 1, 1
   * 3. Third row will have 3 items -> 1, arr[n-1][0] + arr[n-1][1], 1
   * 
   * ALgorithm
   * 1. Create first form loop to add new row to triange
   * 2. Create another nested for loop to insert data in new row
   *    a. If its the first or last index then insert  1
   *    b. Else calculate sum of previous row's j-1th and jth elemnt
   * 3. Insert in the resulant array
   */
  let res = [[1]];
  // Create new rows for the triange
  for (let i = 1; i < numRows; i++) {
    let temp = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) temp.push(1);
      else {
        temp.push(res[i - 1][j - 1] + res[i - 1][j]);
      }
    }

    res.push(temp);
  }
  return res;
};

console.table(generate(5));
