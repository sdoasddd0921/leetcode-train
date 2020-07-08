// 合并两个有序数组
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
	// (57%)
	let i = j = 0
	nums1.length = m
	while (nums2.length) {
		if (nums1[i] > nums2[0]) {
			nums1.splice(i, 0, nums2.shift())
		} else if (nums1[i] === undefined) {
			nums1.push(nums2.shift())
		}
		i++
	}
	return nums1
};
