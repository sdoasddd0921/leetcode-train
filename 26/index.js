// 删除排序数组中的重复项
/**
 * 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	const len = nums.length
	if (len < 2) {
		// 当输入数组长度为 1 和 0 时直接返回数组的长度
		return len
	}
	// 由于需要修改原数组，所以需要使用双指针
	let left = 0
	let right = 1
	for (; right < len; right++) {
		if (nums[left] !== nums[right]) {
			// 右指针的值和左边的不相等
			// 左指针前进一位
			left++
			if (left < right) {
				// 如果移动后的左指针和右指针位置不一样
				// 左指针位置赋值右指针位置的值
				nums[left] = nums[right]
			}
			/**
			 * 或者直接nums[++left]=nums[right]
			 * 即使左右指针位置重合，强制将右指针的值给左指针的位置等于没做操作
			 */
		}
	}
	nums.length = left + 1
	return left + 1
};

// test
const arr1 = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(arr1))
console.log(arr1)

const arr2 = [0,1,2,3,4]
console.log(removeDuplicates(arr2))
console.log(arr2)
