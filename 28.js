// 实现 strStr()
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	// 效率完全不如 indexOf
	if (needle.length === 0) return 0
	let i = 0
	let j = 1
	const li = haystack.length
	const lj = needle.length
	const start = needle[0]
	while (i < li) {
		if (haystack[i] === start) {
			// 第一位匹配上，开始比较后续是否都相等
			while (j < lj) {
				if (haystack[i + j] !== needle[j]) break
				j++
			}
			if (lj !== j) {
				j = 1
			} else {
				return i
			}
		}
		i++
	}
	return -1
};

console.log(strStr('helollo', 'lla'))