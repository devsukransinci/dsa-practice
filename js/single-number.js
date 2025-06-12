/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // XOR all the nums
  
  // Same number XOR gives 0 and if tehr eis only one uniq number then that will be the resul
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumberUnoptimised = function (nums) {
  // Space complexity depends on the size of the nums array becauae the mps size will keep changing
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else map.delete(nums[i]);
  }
  console.log(map);
  return map.keys().next().value;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
