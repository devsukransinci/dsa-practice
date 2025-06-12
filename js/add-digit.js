/**
 * @param {number} num
 * @return {number}
 * 
 */
var addDigits = function (num) {
  /**
   * Algorithm description
   * Dvisibility of 9, when sum of its digit is divible by9 then nubmer is div by 9
   * Hence well moulus the number  by 9
   * 
   */
  if (num == 0) return 0;
  return num % 9 == 0 ? 9 : num % 9;
};

console.log(addDigits('31'));
