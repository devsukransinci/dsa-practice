/**
 * @param {string} columnTitle
 * @return {number}
 * 
 */
var titleToNumber = function (columnTitle) {
  // 65 -> A
  let res = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    // Ftch character number from ascii code
    let curChar = columnTitle.charCodeAt(i) - 64;
    // Multiply previous by 26
    res = res * 26 + curChar;
  }
  return res;
};

console.log(titleToNumber('ZY'));

// A -> 1
// Z - 26
// AA -> 1 + 26
// BA ->
