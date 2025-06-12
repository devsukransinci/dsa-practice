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
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;
  let prev;
  let temp;
  // Us 2 pointer method
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // Reverse
  prev = slow;
  slow = slow.next;
  prev.next = null;
  while (slow) {
    temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  // Compare
  fast = head;
  slow = prev;
  while (slow) {
    if (fast.val !== slow.val) return false;
    else fast = fast.next;
    slow = slow.next;
  }
  return true;
};

// console.log(isPalindrome(createListNode([1, 2, 2, 1])));
console.log(isPalindrome(createListNode([1, 2])));
