// 二叉树的层序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
	// 递归（27%）
	if (!root) return []
	const result = []
	let cache = [root]
	while (cache.length) {
		const vals = []
		const temp = []
		cache.forEach(({ left, right, val }) => {
			vals.push(val)
			left && temp.push(left)
			right && temp.push(right)
		})
		result.push(vals)
		cache = temp
	}
	return result
};
