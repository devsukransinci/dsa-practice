/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  /**
   *Algorithm
   * 1. Sort based on first element of each subarray
   * 2. Store previous end value
   * 3. Iterate through interval array and check for oerlapping
   *  a. If no overlap then insert internal in resulatant array
   *  b. If overlap(Previous end > cureent start) then Updadate last saved interval with prev start and current end interval
   */

  // Sort by firt value O(nlogn)
  intervals.sort((a, b) => a[0] - b[0]);

  // Resultant Array
  let output = [intervals[0].slice()];
  let lastEndValue = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const start = intervals[i][0];
    const end = intervals[i][1];

    lastEndValue = output[output.length - 1][1];
    // Overlap scenario

    if (start <= lastEndValue) {
      // If previous End is greater than current start then update previous value as -> prevStart, currentEnd
      output[output.length - 1][1] = Math.max(end, lastEndValue);
    } else {
      // Else Simply Insert data as there is no overlapping
      output.push([start, end]);
    }
  }
  return output;
};

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// console.table(
//   merge([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );

// console.table(
//   merge([
//     [1, 4],
//     [0, 4],
//   ])
// );

// console.table(
//   merge([
//     [1, 4],
//     [2, 3],
//   ])
// );

// console.table(
//   merge([
//     [2, 3],
//     [4, 5],
//     [6, 7],
//     [8, 9],
//     [1, 10],
//   ])
// );

console.table(
  merge([
    [1, 4],
    [0, 2],
    [3, 5],
  ])
);
