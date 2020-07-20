// 最大子序和
/**
 * @param {number[]} nums
 * @return {number}
 */
const { max } = Math
var maxSubArray = function(nums) {
	// (35%%)
	let len = nums.length
	let i = 1
	let pre = big = nums[0]
	while (i < len) {
		const cur = nums[i++]
		pre = pre < 0 ? cur : pre + cur
		if (pre > big) big = pre
		// console.log(big, pre, cur)
	}
	return big
};

console.log(maxSubArray([-2,4,-6,4,-1,2,1,-4,5]))