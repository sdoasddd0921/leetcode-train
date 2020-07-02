// 对称二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
	// 前序遍历和后续遍历应该相等
	// 2次遍历，巨慢（6%）
	// let l = r = ''
	// function left (node) {
	// 	if (!node) {
	// 		l += 'n'
	// 		return
	// 	}
	// 	l += node.val
	// 	left(node.left)
	// 	left(node.right)
	// }
	// left(root)
	// function right (node) {
	// 	if (!node) {
	// 		r += 'n'
	// 		return
	// 	}
	// 	r += node.val
	// 	right(node.right)
	// 	right(node.left)
	// }
	// right(root)
	// return l === r
	// 递归，更球慢！？（0%）
	const loop = (a, b) => {
		if (a === b) return true
		if (a && b) {
			return a.val === b.val && loop(a.left, b.right) && loop(a.right, b.left)
		}
			return false
		}
		if (!root) return true
		return loop(root.left, root.right)
};