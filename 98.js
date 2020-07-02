// 验证二叉搜索树
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
var isValidBST = function(root) {
	return loop(root, null, null)
};

function loop (node, D, U) {
	if (!node) return true
	const { val } = node
	if (D !== null && val <= D) return false
	if (U !== null && val >= U) return false

	return loop(node.right, val, U) && loop(node.left, D, val)
}
