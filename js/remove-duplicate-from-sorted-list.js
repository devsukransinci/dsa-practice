function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  /**
   *Algorithm
   
   *
   * 1. Run a while loop to iterate through he list
   * 2. In repeat, Compare ucrrent val with next val, and if same then keep removing next node
   */
  let curr = head;
  while (curr) {
    while (curr.next && curr.val == curr.next.val) {
      curr.next = curr.next.next;
    }
    curr = curr.next;
  }
  return head;
};

/**
 * @param {ListNode} list
 */
const print = (list) => {
  let str = list.val;
  while (list.next !== null) {
    list = list.next;
    str += '->' + list.val;
  }
  console.log(str);
};

// [1,2,3,3,4,4,5]
let e1 = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(5))))
    )
  )
);

print(deleteDuplicates(e1));
