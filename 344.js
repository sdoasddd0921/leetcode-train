// 反转字符串

var reverseString = function(s) {
	// 不使用额外的数组空间，就用双指针
	let start = 0
	let end = s.length - 1
	while (start < end) {
		[s[start], s[end]] = [s[end], s[start]]
		end--
		start++
	}
};

reverseString('abcdefghijklmn'.split(''))