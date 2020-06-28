// 只出现一次的数字
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	// 全部异或
	return nums.reduce((a, b) => a^b, 0)
};

console.log(singleNumber([4,1,2,1,2]))