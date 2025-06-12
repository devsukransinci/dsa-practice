/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  let conCat = [];
  let mid = Math.floor(nums.length / 2);
  for (let i = 0; i < mid; i++) {
    let firstIdx = i;
    let lastIdx = nums.length - 1 - i;
    conCat.push(`${nums[firstIdx]}${nums[lastIdx]}`);
  }
  if (nums.length % 2 != 0) conCat.push(nums[mid ]);
  let sum = 0;
  for (let i = 0; i < conCat.length; i++) {
    sum += +conCat[i];
  }
  return sum;
};

console.log(findTheArrayConcVal([5, 14, 13, 8, 12]));
