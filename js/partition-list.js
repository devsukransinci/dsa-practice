/**
 * @param {ListNode} list
 */
const printListNode = (list) => {
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
 *
 * @param {number} val
 * @param {ListNode} next
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  /**Algorithm
   *
   * 1. Create 2 list left and rigt with initial val as 0 or -1
   * 2. Creat 2 moe variable to handle current position of lef and irhg tlist
   * 3. Iterate though input list, if val < target then move to left list or else right list
   * 4. Assign Right list to end of left list
   * 5. Mark end of right lsit as null to prevent infinite list
   * 6. List left.next to skip initial dummy value
   */
  if (!head.val) return head;
  let left = new ListNode();
  let right = new ListNode();
  let leftTail = left;
  let rightTail = right;
  while (head) {
    if (head.val < x) {
      leftTail.next = head;
      leftTail = leftTail.next;
    } else {
      rightTail.next = head;
      rightTail = rightTail.next;
    }
    head = head.next;
  }

  leftTail.next = right.next;
  rightTail.next = null;
  return left.next;
};

printListNode(partition(createListNode([1]), 0));
printListNode(partition(createListNode([1, 4, 3, 2, 5, 2]), 3));
