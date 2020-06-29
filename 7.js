// 整数反转
/**
 * @param {number} x
 * @return {number}
 */
const L = -(2**31)
const R = 2**31 - 1
var reverse = function(x) {
	const less0 = x < 0
	let str = x.toString().split('')
	if (less0) {
		str.shift()
	}
	let n = +str.reverse().join('')
	if (less0) {
		n = -n
	}
	if (n < L || n > R) {
		return 0
	}
	return n
};
console.log(reverse(-2147483641))