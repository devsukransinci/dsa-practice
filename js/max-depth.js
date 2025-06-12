/**Algorithm
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  /**
   * Algorithm
   * 
   * Create a method that recursively calls itself for both lft nd right branch and return lenth of side whichever is greater
   * Each reculrsive call with increment length by 1
   * If tree is null then length is 0
   */
  if (!root) return 0;
  let leftLength = root.left ? maxDepth(root.left) : 0;
  let rightLength = root.right ? maxDepth(root.right) : 0;
  return 1 + (leftLength >= rightLength ? leftLength : rightLength);
};
