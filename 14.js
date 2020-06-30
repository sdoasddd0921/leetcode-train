// 最长公共前缀
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if (strs.length === 0) return ''
	const min = Math.min(...strs.map(str => str.length))
	let result = ''
	let i = 0
	while (i<min) {
		const set = new Set()
		strs.forEach(str => {
			set.add(str[i])
		})
		if (set.size === 1) {
			i++
			result += [...set][0]
		} else {
			break
		}
	}
	return result
};
console.log(longestCommonPrefix(["casddas", 'casddas']))