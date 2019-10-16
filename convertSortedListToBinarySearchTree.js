/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return new TreeNode(head.val);
  }
  let fast = head;
  let slow = head;
  let newEnd = null;
  while (fast) {
    fast = fast.next;
    if (!fast) {
      break;
    }
    fast = fast.next;
    newEnd = slow;
    slow = slow.next;
  }
  const result = new TreeNode(slow.val);
  if (newEnd) {
    newEnd.next = null;
  }
  if (head.next) {
    result.left = sortedListToBST(head);
  } else {
    result.left = new TreeNode(head.val);
  }
  result.right = sortedListToBST(slow.next);
  return result;
};
