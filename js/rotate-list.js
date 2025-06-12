/**Algorithm
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  /**
   * 1. Travese till the end of the list to get the length
   * 2. Calculate where we have to cut check if k%length is 0 i.e k is same as list len, the reutrn head elsne calcualte cut using len-k%len-1 to accomodate k larger than list
   * 3. Start the new list from the immediate next element from where list was cut
   * 4. Attach the original head to last element of lis
   */
  if (head == null || head.next == null || k == 0) return head;

  let len = 1;
  let tail = head;
  // Make tail point to the last element in the list and calculate size of the list
  while (tail.next) {
    tail = tail.next;
    len++;
  }

  // Initialize a temporary list
  let curr = head;
  // Calculate the point to which we have to move the curent and cut the list
  if (k % len === 0) return head;
  let step = len - (k % len) - 1;
  // Increent by one and decrement step
  while (step > 0) {
    curr = curr.next;
    step--;
  }
  // New head will be the consecutive element from which list was cut i. 1, 2, 3, 4, list cut a 2, then head is 3
  let newHead = curr.next;
  curr.next = null;
  // Append the actual startin element of list to end of the original list
  tail.next = head;

  return newHead;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let val = new ListNode(1, new ListNode(2));
let temp = rotateRight(val, 2);
console.log(temp.val);
while (temp.next) {
  temp = temp.next;
  console.log(temp.val);
}
