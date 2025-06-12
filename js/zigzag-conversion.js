/**
 * 
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // Algorithm
  // 1. If numRows is 1, return s
  // 2. Create stepCounter to calculate next charter
  // 3. Create a for loop to iterate through row and one for col
  // 4. Check if not first row, last now and is diagonal(ZAG) portion to print text for diagonal part
  if (numRows === 1) return s;

  // Initial result
  let result = '';
  // 3 -> 4 (A, Y, P, A)
  // 4 -> 6 (A, Y, P, A, L, I)
  let steps = 2 * numRows - 2;
  // Loop through each row
  for (let i = 0; i < numRows; i++) {
    // Loop through each column
    for (let j = i; j < s.length; j += steps) {
      // Increment by steps and add to result
      result += s[j];
      // Not first row,
      // not last row,
      // is that ZAG portion
      if (i != 0 && i != numRows - 1 && j + steps - 2 * i < s.length) {
        result += s[j + steps - 2 * i];
      }
    }
  }
  return result;
};

// Input: s = "PAYPALISHIRING", numRows = 3
// P   A   H   N
// A P L S I I G
// Y   I   R
// Output: "PAHNAPLSIIGYIR"

console.log(convert('PAYPALISHIRING', 3));
