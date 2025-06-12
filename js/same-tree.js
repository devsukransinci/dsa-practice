/**Algorithm
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {  
  /**
   * Algorithm
   * 1. Create a backtracking recusrive function that reciversively call iteslef comparing left of left and right truee, right of left and right tree
   * 2. If Both are null then its same tree
   * 3. If just one is null then not same
   * 4. If values are not same then not same
   */

  const backTrack = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val != right.val) return false;
    return (
      backTrack(left.left, right.left) && backTrack(left.right, right.right)
    );
  };
  return backTrack(p, q);
};
