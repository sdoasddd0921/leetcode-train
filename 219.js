// 存在重复元素 II

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const getMin = arr => {
	let min = arr[arr.length-1]
	for (let i = 1, l = arr.length; i < l; i++) {
		const s = arr[i]-arr[i-1]
		if (s < min) {
			min = s
		}
	}
	return min
}
var containsNearbyDuplicate = function(nums, k) {
	const map = {}
	nums.forEach((i, index) => {
		if (!map[i]) {
			map[i] = [index]
		} else {
			map[i].push(index)
		}
	})
	// console.log(map)
	const keys = Object.keys(map)
	for (let i = 0, l = keys.length; i < l; i++) {
		const arr = map[keys[i]]
		if (arr.length < 2) {
			continue
		}
		if (getMin(arr) <= k) {
			return true
		}
	}
	return false
};

console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(getMin([0,2,3]))

