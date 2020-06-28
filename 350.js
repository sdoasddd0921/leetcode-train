// 两个数组的交集 II
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
	const map = {}
	const arr = []
	nums1.forEach(i => {
		map[i] = (map[i]+1) || 1
	})
	nums2.forEach(i => {
		if (map[i]-- > 0) {
			arr.push(i)
		}
	})
	return arr
};

console.log(intersect([4,9,5], [9,4,9,8,4]))
