/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  // 1. Create a map for All roman vlues to numbre mapping,
  // 2. Itetrate through the map
  // 3. Divide the 'num' by current itr 'n'  and store its mapping n result, Calculate num%n ,
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = '';
  Object.entries(map).forEach(([letter, n]) => {
    let count = Math.floor(num / n);
    // Repeat the key (String) num / n times
    result += letter.repeat(count);
    num = num % n;
  });

  return result;
};

/**
 * @param {number} num
 * @return {string}
 */
var intToRomanTwo = function (num) {
  let arr = [
    { 1000: 'M' },
    { 900: 'CM' },
    { 500: 'D' },
    { 400: 'CD' },
    { 100: 'C' },
    { 90: 'XC' },
    { 50: 'L' },
    { 40: 'XL' },
    { 10: 'X' },
    { 9: 'IX' },
    { 5: 'V' },
    { 4: 'IV' },
    { 1: 'I' },
  ];
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const currentNum = Object.keys(element)[0];
    result += arr[i][currentNum].repeat(Math.floor(num / currentNum));
    num = num % currentNum;
  }

  return result;
};

console.log(intToRoman(3)); // III
console.log(intToRoman(300)); // XX
