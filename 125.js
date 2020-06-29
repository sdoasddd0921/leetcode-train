// 验证回文字符串
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	const arr = s.toLowerCase().split('').filter(i => /[a-z0-9]/.test(i))
	if (arr.length === 0) return true
	console.log(arr)
	let l = 0
	let r = arr.length - 1
	while (l < r) {
		if (arr[l++] !== arr[r--]) {
			return false
		}
	}
	return true
};

console.log(isPalindrome('A man, a plan, a canal: Panama'))