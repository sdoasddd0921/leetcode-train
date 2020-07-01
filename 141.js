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
var hasCycle = function(head) {
	// 缩减法（22%）
	// if (!head || !head.next) return false
	// while (head) {
	// 	if (head === head.next) return true
	// 	// 删掉中间的节点，缩小环
	// 	head.next = (head.next || {}).next
	// 	head = head.next
	// }
	// return false
};
var hasCycle = function(head) {
	// hash 法（97%）
	const set = new Set()
	while (head) {
		if (!set.has(head)) {
			// 未出现过
			set.add(head)
			head = head.next
		} else {
			return true
		}
	}
	return false
};