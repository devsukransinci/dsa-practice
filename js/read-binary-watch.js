/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
  /**
   * Algorithm
   * 
   * 
   * 1. Create an array to store the times
   * 2. Loop through the hours and minutes
   * 3. Calculate the number of 1s in the binary representation of h and m
   * 4. If the number of 1s is equal to num, push the time to the array
   */
  const times = [];
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      // Calculate the number of 1s in the binary representation of h and m
      const hOnes = h ? h.toString(2).match(/1/g).length : 0;
      const mOnes = m ? m.toString(2).match(/1/g).length : 0;
      if (hOnes + mOnes === num) {
        times.push(`${h}:${m < 10 ? `0${m}` : m}`);
      }
    }
  }
  return times;
};

console.log(readBinaryWatch(2));