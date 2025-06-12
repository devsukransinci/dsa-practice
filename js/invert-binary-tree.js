/**
 * Algorithm
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  /**
   * Recursively swap left with right,
   */
  const backtrack = (temp) => {
    if (!temp) return null;

    let left = temp.left;
    temp.left = temp.right;
    temp.right = left;
    backtrack(temp.left);
    backtrack(temp.right);
  };

  backtrack(root);
  return root;
};
