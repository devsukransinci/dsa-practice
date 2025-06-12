/**
 *
 * @param {number} val
 * @param {ListNode} next
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
Algorithm
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // Store the node immediadelty before left while iterating through list
  let dummyNode = new ListNode(0, head);
  let leftPrev = dummyNode;
  let curr = head;

  for (let i = 0; i < left - 1; i++) {
    leftPrev = curr;
    curr = curr.next;
  }

  // No. of times we have to reverse r - l + 1
  // Try debugging to understand
  // 1. Assign Next node in temp
  // 2. Asign prev to next pointer
  // 3. Assign current value to prev
  // 4. Assign Next to current (Move ton ext node)
  // 5. Net Itr: Assign next node to temp
  // 6. Assign prev to next Node pointer (Prev from step 3)
  // Bascially make 1 -> 2 to 2-> 1
  let prev = null;
  for (let i = 0; i < right - left + 1; i++) {
    // 1 -> 2 => 2 -> 1
    let tempNext = curr.next; // tempNext = 2 -> null
    curr.next = prev; // 1 -> null
    prev = curr; // prev = 1
    curr = tempNext; // curr = 2
  }
  leftPrev.next.next = curr;
  leftPrev.next = prev;

  return dummyNode.next;
};

printListNode(reverseBetween(createListNode([1, 2, 3, 4, 5]), 2, 4));

let list = createListNode([3, 5]);
printListNode(reverseBetween(list, 1, 2));
