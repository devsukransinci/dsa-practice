/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let res = [];
  for (let i = 0; i < intervals.length; i++) {
    // If new INterval End is less then current intervl start then,
    // INsert the interval and return the remainin list
    if (newInterval[1] < intervals[i][0]) {
      res.push(newInterval, ...intervals.slice(i));
      return res;
    }
    // New inerval is greater than current interval end,
    // then simply append curernt interval to output,
    else if (newInterval[0] > intervals[i][1]) {
      res.push(intervals[i]);
    }
    // There is some form of overlap,
    // then update newInterval array with new Min/max value based on current interval
    else {
      newInterval = [
        Math.min(intervals[i][0], newInterval[0]),
        Math.max(intervals[i][1], newInterval[1]),
      ];
    }
  }
  // If neINterval ends up being the last item,
  // then insert and return result,
  res.push(newInterval);
  return res;
};

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
console.table(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
console.table(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
