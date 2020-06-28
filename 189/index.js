// 旋转数组
/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	// 简单的循环
	for (let i = 0; i < k; i++) {
		nums.unshift(nums.pop())
	}
};

// test
const arr = [1,2,3,4,5,6,7]
rotate(arr, 3)
console.log(arr)