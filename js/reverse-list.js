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
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  /**
   * Algorithm
   *
   * 1. Create two pointers, 1 as nul and another as head
   * 2. tore third element in avariable and swap it with first
   * 3. Increment first 2 values
   */

  let prev = null;
  let curr = head;

  while (curr) {
    let temp = curr.next; // Store third val in a variable
    curr.next = prev; // Wap value third with first
    prev = curr; // INcrement prev
    curr = temp; // INcmreent curr
  }
  return prev;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseListRecursive = function (head) {
  if (!head) return;
  let newHead = head;
  if (head.next) {
    newHead = reverseListRecursive(head.next);
    head.next.next = head;
  }
  head.next = null;
  return newHead;
};

printListNode(reverseListRecursive(createListNode([1, 2, 3, 4, 5])));
