/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * 
 * 
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  let res = [];
  const backtrack = (tree) => {
    if (!tree) return;
    for (child of tree.children) {
      backtrack(child);
    }
    res.push(tree.val);
  };
  backtrack(root);
  return res;
};
