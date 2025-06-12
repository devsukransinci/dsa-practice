/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
  /**
   * 
   *
   * @param {number} val
   * @param {ListNode} next
   */
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  toString() {
    let result = this.val + '->';
    let temp = this.next;
    while (temp.next) {
      result += temp.val + '->';
      temp = temp.next;
    }
    result += temp.val;
    return result;
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  /**
   * Algorithm (Furst element refers to current el)
   * 1. Append an eleemnt at the beginning of the list
   * 2. Loop while 2nd and third el exist in list
   * 3. Store 2nd element and 3rdmelement pointers in a temporary list
   * 4. Replace third element pointer with 4th lemenet pointer (Improtant to pevent infinite loop repition after step 6)
   * 5. Assign t2 to 2d ellement
   * 6. Assign t1 to 3rd element (5, 6th step finally swaps first two elements)
   */
  //dummy node
  let dummy = new ListNode(0);
  dummy.next = head;

  // 0 -> 1 -> 2 -> 3 -> 4
  let current = dummy;
  while (current.next && current.next.next) {
    // 1 -> 2 -> 3 -> 4
    let temp1 = current.next;
    // 2 -> 3 -> 4
    let temp2 = current.next.next;
    // 0 -> 1 -> 3 -> 4
    current.next.next = current.next.next.next;
    // 0 -> 2 -> 3 -> 4
    current.next = temp2;
    // 0 -> 2 -> 1 -> 3 -> 4
    current.next.next = temp1;

    //current move to next 2 pos as the initial 2 elements are now sorted
    current = current.next.next;
  }
  return dummy.next;
};

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

console.log(swapPairs(head).toString());
