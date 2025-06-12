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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = [];

  const backtrack = (tree) => {
    if (!tree) return;
    res.push(tree.val);
    backtrack(tree.left);
    backtrack(tree.right);
  };
  backtrack(root);
  return res;
};
