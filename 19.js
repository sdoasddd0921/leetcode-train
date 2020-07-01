// 删除链表的倒数第N个节点
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	const arr = []
	let curr = head
	while (curr) {
		arr.push(curr)
		curr = curr.next
	}
	const index = arr.length - n
	if (index) {
		// 不是第一个节点
		arr[index - 1].next = arr[index + 1]
	} else {
		// 是头节点
		head = arr[index + 1] || null
	}
	return head
};