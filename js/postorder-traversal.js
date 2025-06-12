/**
 * Algorithm
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  let temp = [];
  const backtrack = (tree) => {
      if (!tree) return;
      backtrack(tree.left);
      backtrack(tree.right)
      temp.push(tree.val)
  }
  backtrack(root)
  return temp;
};