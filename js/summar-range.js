/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let res = [];

  let idx = 0;
  while (idx < nums.length) {
    let strt, end;
    strt = nums[idx];

    // While difference beten current and next inde is 1 increment idx
    
    while (idx + 1 < nums.length && nums[idx + 1] == nums[idx] + 1) {
      idx++;
    }

    end = nums[idx];

    if (strt == end) res.push(strt + '');
    else res.push(strt + '->' + end);

    idx++;
  }
  return res;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
