/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  /**
   * Algorithm
   * 
   * 1. Create a variable to store the sum
   * 2. Create a function to traverse the tree
   * 3. If the tree is null, return
   * 4. If the tree is a leaf and is a left child, add the value to the sum
   * 5. Recursively traverse the left and right subtrees along with a flag to indicate if the node is a left child
   */
  let res = 0;
  const backtrack = (tree, isLeft) => {
    if (!tree) return;
    if (!tree.left && !tree.right) {
      if (isLeft) res += tree.val;
      return;
    }
    backtrack(tree.left, true);
    backtrack(tree.right, false);
  };

  backtrack(root, false);
  return res;
};
