function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * 
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let res = [];
  const backtrack = (tree, curr) => {
    if (!tree) return;
    if (!tree.left && !tree.right) {
      res.push(curr + tree.val);
      return;
    }
    // if (tree.left) {
    backtrack(tree.left, curr + tree.val + '->');
    // }
    // if (tree.right) {
    backtrack(tree.right, curr + tree.val + '->');
    // }
  };
  backtrack(root, '');
  return res;
};
// [1,2,3,null,5]
const temp = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(5, null)),
  new TreeNode(3, null)
);
console.log(binaryTreePaths(temp));
