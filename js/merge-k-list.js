/**
 *  Algorithm description
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  return lists.reduce(mergeList);
};

function mergeList(l1, l2) {
  let l3 = new ListNode();
  let curr = l3;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      curr.next = l2;
      l2 = l2.next;
    } else {
      curr.next = l1;
      l1 = l1.next;
    }
    curr = curr.next;
  }

  curr.next = l1 || l2;
  return l3.next;
}

let l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let l3 = new ListNode(2, new ListNode(6));

console.log(mergeKLists([l1, l2, l3]));
