/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  //Algorithm
  // Start from either end until reached center
  // For each iteration, Calculate area such that length will be the min(first, last), increment line on whichever side its shorter

  // height -> Array of length n
  // n = height.length,
  let result = 0;
  let firstLineIdx = 0;
  let lastLineIdx = height.length - 1;
  while (firstLineIdx < lastLineIdx) {
    // Length -> shorter side of the two
    const length = Math.min(height[firstLineIdx], height[lastLineIdx]);
    // Breadth
    const breadth = lastLineIdx - firstLineIdx;
    // Store the larger area
    result = Math.max(result, length * breadth);
    height[firstLineIdx] <= height[lastLineIdx]
      ? firstLineIdx++
      : lastLineIdx--;
  }
  return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
