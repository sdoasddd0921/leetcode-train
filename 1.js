// 两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const isNum = data => typeof data === 'number'
var twoSum = function(nums, target) {
  const map = {}
  for (let i = 0, len = nums.length; i < len; i++) {
    const j = map[target-nums[i]]
    // 注意 0 的判断，0 在这是合法值
    if (isNum(j)) {
      return [j, i]
    } else {
      // 这里的 0 也一样
      map[nums[i]] = isNum(map[nums[i]]) ? map[nums[i]] : i
    }
  }
};

console.log(twoSum([2, 2, 11, 15], 13))

