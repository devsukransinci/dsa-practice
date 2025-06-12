/**
 * Algorithm
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  /** Algorithm
   * Time complexity O(m+n)
   * 
   * Keep iterating throgh list until l1 is not equal to l2
   * ONce the itreation is complete swap the pointer and iterate other list
   * At one point they will meet
   */
  // Create 2 pointers
  let l1 = headA;
  let l2 = headB;
  // Keep iterating until there is an intersection
  while (l1 != l2) {
    // Once iteration is complete start iration throigh list 2 using sae pointer
    l1 = l1 ? l1.next : headB;
    // Once iteration is complete start iration throigh list 1 using sae pointer
    l2 = l2 ? l2.next : headA;
  }
  return l1;
};
