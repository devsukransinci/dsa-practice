// Two Sum

/**
 * @param {number[]} arr
 * @param {number} target
 * @returns  {number[]}
 */
const twoSum = (arr, target) => {
  // O(n)2 Complexity
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }
  return [];
};

/**
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns  {number[]}
 */
const twoSumOptimized = (arr, target) => {
  // 1. Iterate through all items once
  // 2. Storage the difference between trget and ith element
  // 3. Check if the difference is in the map (If yes then return difference's index and ith index)
  // 4. If not then store the ith element and index in map
  let ans = [];
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let val = target - arr[i];
    if (map[val]) {
      ans[0] = map[val];
      ans[1] = i;
    } else {
      map[arr[i]] = i;
    }
  }
  return ans;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSumOptimized([2, 7, 11, 15], 9));
