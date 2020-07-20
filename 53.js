// 最大子序和
/**
 * @param {number[]} nums
 * @return {number}
 */
const { max } = Math
var maxSubArray = function(nums) {
	// (0%)
	let len = nums.length
	let i = 1
	let pre = big = nums[0]
	while (i < len) {
		const cur = nums[i++]
		pre += cur
		if (cur > 0) {
			pre = max(pre, cur)
			big = max(pre, big)
		} else {
			big = max(big, cur)
		}
		console.log(big, pre, cur)
	}
	console.log(big)
	return big
};

console.log(maxSubArray([-2,-1,-7]))