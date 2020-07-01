//  二叉树的最大深度
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	// 递归（59%）
	return !root ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};