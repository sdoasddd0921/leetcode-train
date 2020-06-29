// 有效的字母异位词
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	const arr = new Array(26).fill(0)
	if (s.length !== t.length) {
		return false
	}
	len = s.length
	for (let i = 0; i < len; i++) {
		arr[s[i].charCodeAt() - 97]++
		arr[t[i].charCodeAt() - 97]--
	}
	return arr.every(i => i===0)
};
const a = isAnagram('anagra', 'nagaram')
console.log(a)