/**Algorithm
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  let res = [];
  const backtrack = (tree) => {
    if (!tree) return;
    res.push(tree.val);
    for (let child of tree.children) {
      backtrack(child);
    }
  };
  backtrack(root);
  return res;
};
