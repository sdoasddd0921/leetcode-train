// 将有序数组转换为二叉搜索树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
	// 分治递归（49%）
	const len = nums.length
	if (len === 0) {
		return null
	}
	const right = nums.splice(Math.floor(len / 2))
	const node = {
		val: right.length ? right.shift() : nums.pop(),
		left: sortedArrayToBST(nums),
		right: sortedArrayToBST(right)
	}
	return node
};
