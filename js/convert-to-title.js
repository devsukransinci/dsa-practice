/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let ans = '';
  while (columnNumber >= 1) {
    ans = String.fromCharCode(((columnNumber - 1) % 26) + 65) + ans;
    columnNumber = (columnNumber - 1) / 26;
  }
  return ans;
};


console.log(convertToTitle(99999));
// console.log(28);
