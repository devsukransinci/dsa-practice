/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  // Make height of tree => 5 necaus e we have to return when we have more than 4 intger
  

  if (s.length > 12) return [];

  let res = [];

  /**
   *
   * @param {number} i Counter
   * @param {number} dots Number of Dots used
   * @param {string} currentIP Current IP string
   */
  const backtrack = (i, dots, currentIP) => {

    // Return if 4 dots are created and the string is consumed
    if (dots === 4 && s.length == i) {
      res.push(currentIP.substring(0, currentIP.length - 1)); // remove last '.'
      return;
    }

    // If more than 4 dots creaed
    if (dots > 4) {
      return;
    }

    /**
     * Recusive call backtracing by creating string with 1, 2, 3 charactercombnation
     * Math.min is used to ensure that i+3 exist of if string has less characters then use that
     */
    for (let j = i; j <= Math.min(i + 3, s.length); j++) {
      /**
       * sring must be less then 255
       * No trailing 0
       * Not start with 0
       */
      if (+s.slice(i, j + 1) <= 255 && (i == j || s[i] != '0')) {
        backtrack(j + 1, dots + 1, currentIP + s.slice(i, j + 1) + '.');
      }
    }
  };

  backtrack(0, 0, '');
  return res;
};

// Input: s = "25525511135"
// Output: ["255.255.11.135","255.255.111.35"]
console.log(restoreIpAddresses('25525511135'));
