// 外观数列
/**
 * @param {number} n
 * @return {string}
 */
	const arr = ['1']
	for (let i = 1; i < 30; i++) {
		arr.unshift(getNext(arr[0]))
	}
var countAndSay = function(n) {
	return arr[30 - n]
};

var getNext = str => {
	str = str.split('').reverse()
	let current = str.shift()
	const arr = [current]
	let i = 1
	str.forEach(x => {
		if (x !== current) {
			current = x
			arr.unshift(i)
			arr.unshift(current)
			i = 1
		} else {
			i++
		}
	})
	arr.unshift(i)
	return arr.join('')
}
