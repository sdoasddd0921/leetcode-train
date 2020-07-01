// 合并两个有序链表
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	// 递归，但是很慢（20%）
	if (!l1) return l2
	if (!l2) return l1
	let left
	if (l1.val < l2.val) {
		left = l1
		left.next = mergeTwoLists(l2, l1.next)
	} else {
		left = l2
		left.next = mergeTwoLists(l1, l2.next)
	}
	return left
};