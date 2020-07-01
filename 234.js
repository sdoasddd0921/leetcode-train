// 回文链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	if (!head) return true
	let slow = head
	let fast = head
	while (fast && fast.next) {
		slow.next.pre = slow
		slow = slow.next
		fast = (fast.next || {}).next
	}
	let l, r
	l = slow.pre
	if (fast) {
		r = slow.next
	} else {
		r = slow
	}
	while (r) {
		if (r.val !== l.val) return false
		l = l.pre
		r = r.next
	}
	return true
};