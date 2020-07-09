// 爬楼梯
/**
 * @param {number} n
 * @return {number}
 */
const dp = [1, 1]
var climbStairs = function(n) {
	// (59%)
	if (!dp[n]) {
		for (let i = dp.length - 1; i < n; i++) {
			dp[i + 1] = dp[i] + dp[i - 1]
		}
	}
	return dp[n]
};

console.log(climbStairs(4))
