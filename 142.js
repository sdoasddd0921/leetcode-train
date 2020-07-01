// 环形链表 II
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
var detectCycle = function(head) {
	// hash 法，很慢（9%）
	// const set = new Set()
	// while (head) {
	// 	if (set.has(head)) return head
	// 	set.add(head)
	// 	head = head.next
	// }
	// return null
	// -----------------------
	// 双指针(56%)
	let s = f = head
	while (f) {
		f = (f.next || {}).next
		if (!f) return null
		s = s.next
		if (s === f) break
	}
	if (!f) return null
	f = head
	while (s !== f) {
		s = s.next
		f = f.next
	}
	return s
};