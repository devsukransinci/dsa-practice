/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  /**
   *Algorithm
   * 
   * 1. Initial case 1- > 1, 2 -> 11  and initialise previousString as 11 initially,
   * 2. From n=3 Use a loop to iterate until counter is less then n,
   * 3. Use another for loop to iterate hough previousString,
   * 4. Set the count as 1, Run a while loop to check if there are multiple same digits and accoinly increment second loop ounter and count
   * 5. Update the previousString by appending 'count actual Value (Use a temp variable to prevent infinite loop for previousString'
   */
  if (n === 1) return '1';
  if (n === 2) return '11';
  let res = '11';

  let temp = '';
  for (let j = 2; j < n; j++) {
    for (let i = 0; i <= res.length - 1; i++) {
      let count = 1;
      while (res[i] === res[i + 1]) {
        count++;
        i++;
      }
      temp += `${count}${res[i]}`;
    }
    res = temp;
    temp = '';
  }
  return res;
};
// 1
console.log(countAndSay(1));
// 11
console.log(countAndSay(2));
// 21
console.log(countAndSay(3));
// 1211
console.log(countAndSay(4));
