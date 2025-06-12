/**Algorithm
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  /**
   *Algorithm
   *
   * 1. Create a head to store staring point and current to store current element of list
   * 2. Traverse through both list while they havent reached the end
   * 3. Compare the current valu of both list and ssign that list to current.next, increment list
   * 4. Return head
   */

  let head = new ListNode(-1);
  let current = head;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      current.next = list2;
      list2 = list2.next;
    } else {
      current.next = list1;
      list1 = list1.next;
    }

    current = current.next;
  }

  current.next = list1 || list2;
  return head.next;
};

/**
 *
 * @param {number} val
 * @param {ListNode} next
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
console.log(mergeTwoLists(list1, list2));

// 4576, 123
