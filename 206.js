// 反转链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	// 迭代法(20%)
	const arr = []
	let curr = head
	while (curr) {
		arr.push(curr)
		curr = curr.next
	}
	head = arr.pop()
	curr = head
	while (arr.length) {
		// 防止无限循环链
		const node = arr.pop()
		node.next = null
		curr.next = node
		curr = node
	}
	return head
};
