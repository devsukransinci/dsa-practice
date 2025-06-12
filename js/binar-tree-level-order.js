function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  /**
   * Store each level of node in a queue  and count their child
   * Algorithm
   * 
   * 1. Store the root in the quee
   * 2. Iterate using while loop until queuee[0] is not null
   * 3. Create a temp array to store the child
   * 4. Create  variable to store queue lengt
   * 5. Iterate throug for loop until
   *  i = q.lenth
   * 6. Pop first eleemnt from queue and shift the array
   * 7. If Value qeist then put in the array created in step 3
   * 8. Push .left and .right in queue
   * 9. After comming out of for loop insert the content of row array to result and repeat the process ntl our quee is empty
   */
  let q = [root],
    ans = [];
  while (q[0]) {
    let qlen = q.length,
      row = [];
    for (let i = 0; i < qlen; i++) {
      let curr = q.shift();
      row.push(curr.val);
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
    ans.push(row);
  }
  return ans;
};

console.log(levelOrder());
