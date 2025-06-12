/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  /**
   * Use Backg tracking
   * 
   *
   * 1. Creata a recurvie fn with two params, 1. Current Array, 2. Remaing Elements
   * 2. Use base case as when remaining elements length is 0
   * 3. If prev and current element are same then suip the iteratio nt prevent uplication
   * 4. Recurviely call the funtion by adin one el from remaing array to current, remaining array after rmeing first element
   * 5. Make an ainitial call to this function from 
   */
  let results = [];
  nums.sort((a, b) => a - b);

  /**
   * @param {number[][]} remaining
   * @param {number[][]} remaining
   */
  let permutate = (current, remaining) => {
    if (remaining.length === 0) {
      results.push(current);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      if (i > 0 && remaining[i - 1] === remaining[i]) continue;
      permutate(
        current.concat(remaining[i]),
        remaining.slice(0, i).concat(remaining.slice(i + 1))
      );
    }
  };

  permutate([], nums);
  return results;
};

// [[1,1,2], [1,2,1], [2,1,1]]
console.log(permuteUnique([1, 1, 2]));
//
console.log(permuteUnique([3, 3, 0, 3]));
