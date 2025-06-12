/**
 * 
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 * ***   
 *  ...
 * };
 */


/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 0;
    let end = n;
    let mid;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        if (isBadVersion(mid - 1)) end = mid - 1;
        else return mid;
      } else {
        start = mid + 1;
      }
    }
  };
};

/**
 * Explanation
 * There is a funcption provided which returns whether a number is abd or nu
 * Find the first bad version
 * 1. Use binary search
 * 2 Calulate mid and call isBadVersion
 * 3. If its true then 
 *    a. CHeck if mid-1 is a bad version, if so hen set end = mid-1
 *    b. Else mid is the shortest bad version and return that
 * 4. Else set start = mid + 1
 */