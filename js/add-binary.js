/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  /**
   *Algorithm
   * Reverse both the string as we are string from right hand side in theory
   * Iterate through the larger tring
   * If the iteration doesnt have a number, then use zero
   * Add Both nmber + reslt in current index (It will be the carry value)
   * If sum is equal or greatir than 2 then, store sum%2 in current index and push cary 1 else just store sum in current index
   * Reverse and return 
   * 
   */
  a = a.split('').reverse().join('');
  b = b.split('').reverse().join('');
  let len = Math.max(a.length, b.length);
  let result = [];
  for (let i = 0; i < len; i += 1) {
    let num1 = Number(a[i] || 0);
    let num2 = Number(b[i]) || 0;
    let curr = Number(result[i] || 0) + num1 + num2;
    if (curr >= 2) {
      result[i] = curr % 2;
      result.push(1);
    } else {
      result[i] = curr;
    }
  }
  return result.reverse().join('');
};

// Input: (a = '11'), (b = '1');
// Output: '100';
console.log(addBinary('10', '1'));
