// 移动零
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0
  let j = 1
  const len = nums.length
  while (j < len) {
    if (nums[j] !== 0) {
      if (nums[i] === 0) {
        nums[i++] = nums[j]
        nums[j] = 0
      }
    } else {
      if (nums[i] !== 0) {
        i = j
      }
    }
    j++
  }
};

const arr = [0,0,3]
moveZeroes(arr)
console.log(arr)
