/**
 * Algorithm
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

  @param {ListNode} l1
  @param {ListNode} l2
  @return {ListNode}

const addTwoNumbers = function (l1, l2) {
  // Algoright
  
  // 1. Create a variable  to storae sum of list items AND carry 'sum'
  // 2. Create a variable to store current head of new list 'current' with first item as 0
  // 3. Create var to store head of actual new list 'result'
  // 4. Traverse to both list until both are null
  // 5. Add current item of both list as 'sum', add sum to current list (sum % 10 as it should be signle digit) and move the head of current list to next
  // 6. If sum is greater than 10, then carry 1 (Assign sum = 1  else 0)
  // 7. After traversing through both list check if sum is not 0, then add it to current list
  // 8. Return 'result.next' as first item is 0

  let sum = 0;

  // Create a list to store current item
  let current = new ListNode(0);

  // Create a pointer to head
  let result = current;
  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    // 0 -> 7 -> 0 -> 8
    current.next = new ListNode(sum % 10);
    current = current.next;
    sum = sum > 9 ? 1 : 0;
  }

  // If sum of last two digits is not a single digit then add another item to list
  if (sum) {
    current.next = new ListNode(sum);
  }

  return result.next;
};

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Expected Output: [7,0,8]
const nodeOne = new ListNode(2, new ListNode(4, new ListNode(3)));
const nodeTwo = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(JSON.stringify(addTwoNumbers(nodeOne, nodeTwo)));
