// 字符串中的第一个唯一字符
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	const arr = s.split('')
	const map = {}
	const l = s.length
	for (let i = 0; i < l; i++) {
		if (map[s[i]]) {
			arr[map[s[i]] - 1] = false
			arr[i] = false
		}
		map[s[i]] = i + 1
	}
	// console.log(arr)
	for (let i = 0; i < l; i++) {
		if (arr[i]) {
			return i
		}
	}
	return -1
};

console.log(firstUniqChar("lovveleettcdcode"))