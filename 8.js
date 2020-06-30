// 字符串转换整数 (atoi)
/**
 * @param {string} str
 * @return {number}
 */
const L = -(2**31)
const R = 2**31 - 1
var myAtoi = function(str) {
	const reg = /^([-+]?\d+\.?\d*)/
	str = str.trim().match(reg)
	str = str ? +str[1] : 0
	if (str < L) return L
	if (str > R) return R
	return str
};

console.log(myAtoi('+1'))