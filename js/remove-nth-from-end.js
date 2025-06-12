/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  /**
   * Description
   * We are traversing a linked link (That can be done from the begning only)
   * To remove an item from end, we will need 2 pointer
   * 1. First pointer That Runs from the beginning
   * 2. Second pointer that starts when first one reaches nth poistion from front
   *
   * Algorithm
   * 1. Create furst and second pointer both pointing to head initially
   * 2. Start travering first pointer until it reaches nth position from front
   * 3. Check if the pointer is not null, if yes then simply return th head
   * 4. Start traversing scond and first both until first is not null
   * 5. Map second.next to second.next.next (Skipping he conecutive one)
   * 6. Return head
   */

  let firstHead = head;
  let secondHead = head;
  for (let i = 0; i < n; i++) {
    firstHead = firstHead.next;
  }
  if (!firstHead) return head.next;
  while (firstHead.next) {
    firstHead = firstHead.next;
    secondHead = secondHead.next;
  }

  secondHead.next = secondHead.next.next;
  return head;
};

/**
 *
 * @param {number} val
 * @param {number} next
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
const list = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
);
console.log(removeNthFromEnd(list, 2));
