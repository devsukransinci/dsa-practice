/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  /**
   * Algorithm
   * 1. Return if node is null
   * 2. Create a back tracking function
   *      If its a leaf node then check prevSum + curentNode val = target Sum
   * 3. Backtrack towards right and eft node and calculate run
   * 4. Return retue if either left or right is true
   * 5. Call the backtracking function with root, 0 as initial sum
   */
  if (!root) return false;

  const backtracking = (node, sum) => {
    if (!node.left && !node.right) return targetSum == sum + node.val;
    const tempLeft = node.left
      ? backtracking(node.left, node.val + sum)
      : false;
    const tempRight = node.right
      ? backtracking(node.right, node.val + sum)
      : false;
    return tempLeft || tempRight;
  };
  return backtracking(root, 0);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
