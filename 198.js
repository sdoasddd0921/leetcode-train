// 打家劫舍
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	// (18%)
	if (!nums.length) return 0
	const { max } = Math
	const len = nums.length
	const dp = []
	let dp_i = dp_1 = dp_2 = i = sum = 0
	while (i < len) {
		dp_i = nums[i]
		dp_1 = dp[i-1] || 0
		dp_2 = dp[i-2] || 0
		dp[i++] = max(dp_i + dp_2, dp_1)
	}
	return dp.pop()

};

// console.log(rob([8,9,9,4,10,5,6,9,7,9]))
console.log(rob([1]))
