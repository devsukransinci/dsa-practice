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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  /**
   * Algorithm
   * 
   * 1. Check if root is null then return rue means its a mirro
   * 2. Create a backtracking funding that  recursivey calls itself comparigh outer left ith outer right, inner left with inner right noed
   * 3. If both are nul then its a mirror
   * 4. If just one is null then its not a mirror
   * 5. If values ar not same then its not a mirror
   */
  if (!root) return true;
  const backtrack = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val != right.val) return false;
    return (
      backtrack(left.left, right.right) && backtrack(left.right, right.left)
    );
  };
  return backtrack(root.left, root.right);
};
