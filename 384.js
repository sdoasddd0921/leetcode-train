// 打乱数组
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
	// (27%)
	this.row = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
	return this.row
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
	const { floor, random } = Math
	const arr = []
	const nums = [...this.row]
	while (nums.length) {
		arr.push(nums.splice(floor(random() * nums.length), 1)[0])
	}
	return arr
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

const obj = new Solution([1,2,3,4])
for (let i = 0; i < 10; i++) {
	console.log(obj.shuffle())
}