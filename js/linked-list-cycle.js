/**
 * Algorithm
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list
 */
const printListNode = (list) => {
  if (!list) return console.log(null);
  let str = list.val;
  while (list.next !== null) {
    list = list.next;
    str += '->' + list.val;
  }
  console.log(str);
};

/**
 *
 * @param {string[]} list
 * @returns {ListNode}
 */
const createListNode = (list) => {
  let head = new ListNode(list[0]);
  let node = head;
  for (let i = 1; i < list.length; i++) {
    node.next = new ListNode(list[i], null);
    node = node.next;
  }
  return head;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  /**
   * Use Floyds tortoise and hare
   * Use two pointer, slow and fast 
   * INcrement sow by one and fast by 2
   * If the link list end then fast will reach first...or at one point fast will be equal to slow
   * 
   * 1. Create sow and fast pointer
   * 2. Iterate through loopuntil fast ad fast.next exist
   * 3. Increent slw by one and fast by two
   * 4. If fast and slow are same then its a cycle or else fast reaches the end and is not a cycle
   */
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow== fast) return true
  }
  return false;
};

createListNode([3,2,0,-4])