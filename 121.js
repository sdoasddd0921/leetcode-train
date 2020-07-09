// 买卖股票的最佳时机
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	// (47%)
	if (prices.length < 2) return 0
	let min = max = prices[0]
	let i = 1
	let j = prices.length
	let r = 0
	while (i < j) {
		const p = prices[i++]
		if (p < min) {
			r = Math.max(r, max-min)
			min = p
			max = p
		} else if (p > max) {
			max = p
		}
	}
	return Math.max(r, max-min)
};

console.log(maxProfit([1,2]))