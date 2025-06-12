/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  /**
   *  Algorithm 
   *
   * 1. Using a loop check the mth and nth element, whichever is large, put them in the end
   * 2. Decrement the counter posito of that array and the position counter
   * *** Compare nums1 with -1 to ensure we are comparing 0th element as well
   */
  let pos = nums1.length - 1;
  while (m > -1 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[pos] = nums1[m - 1];
      m--;
    } else {
      nums1[pos] = nums2[n - 1];
      n--;
    }
    pos--;
  }

  return nums1;
};

console.log(merge([0], 0, [1], 1));
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
