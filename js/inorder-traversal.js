function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * 
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let res = [];

  const inorder = (tree) => {
    if (!tree) return;

    if (tree.left) inorder(tree.left);
    res.push(tree.val);
    if (tree.right) inorder(tree.right);
  };

  inorder(root);
  return res;
};

// Trouble shoot ater

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversalItre = function (root) {
  let res = [];
  let stack = [];
  let curr = root;
  while (curr || stack) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.splice(0, 1);
    res.push(curr.val);
    curr = curr.right;
  }
  return res;
};
