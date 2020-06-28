// 旋转数组
/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// var rotate = function(nums, k) {
// 	// 简单的循环
// 	for (let i = 0; i < k; i++) {
// 		nums.unshift(nums.pop())
// 	}
// };

const reverse = (arr, start, end) => {
	while (end > start) {
		let [a, b] = [arr[start], arr[end]]
		arr[start] = b
		arr[end] = a
		start++
		end--
	}
}
var rotate = function(nums, k) {
	if (k > nums.length) {
		k %= nums.length
	}
	// 三次反转法
	const end = nums.length - 1
	reverse(nums, 0, end)
	reverse(nums, 0, k - 1)
	reverse(nums, k, end)
};

// test
const arr = [1,2]
rotate(arr, 3)
console.log(arr)