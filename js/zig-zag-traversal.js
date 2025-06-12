/**
 * 
 * This code implements a solution to the Zigzag Level Order Traversal problem in a binary tree. The zigzag traversal of a binary tree is similar to level order traversal, but in this case, the nodes at odd levels are traversed from right to left, while the nodes at even levels are traversed from left to right.

The function zigzagLevelOrder(root) takes the root of the binary tree as input and returns an array that represents the zigzag level order traversal of the tree.

The function go(node, l, res) is a helper function that performs the actual traversal of the binary tree. It takes three arguments:

node: the current node being processed
l: the level of the current node
res: the array that holds the result of the traversal
The function first checks if the node is null, which represents the end of a branch. If so, the function returns immediately.

If the array res does not yet have an array for the current level l, a new empty array is pushed into res.

The function then determines whether the current level l is even or odd. If it's even, the node.val is added to the end of the array for the current level l (res[l]). If it's odd, the node.val is added to the beginning of the array for the current level l (res[l]), effectively reversing the order.

Finally, the function calls itself recursively for the left and right subtrees of the current node, incrementing the level by one.

The zigzagLevelOrder function initializes an empty result array res and calls the go function with the root node of the binary tree, level 0, and res. Once the traversal is complete, res is returned, which contains the zigzag level order traversal of the binary tree.


 */

function zigzagLevelOrder(root) {
  let res = [];

  const go = (node, level, resultArr) => {
    if (!node) return;

    if (resultArr[level] == null) resultArr.push([]);

    if (level % 2 === 0) {
      resultArr[level].push(node.val);
    } else {
      resultArr[level].unshift(node.val);
    }

    go(node.left, level + 1, resultArr);
    go(node.right, level + 1, resultArr);
  };
  go(root, 0, res);
  return res;
}
