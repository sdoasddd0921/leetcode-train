// 加一
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits[0] === 9) {
    digits.unshift(0)
  }
  let end = digits.length - 1
  while (end > -1) {
    if (digits[end] === 9) {
      // 9 加一会溢出进位
      digits[end--] = 0
    } else {
      digits[end]++
      break
    }
  }
  if (digits[0] === 0) {
    digits.shift()
  }
  return digits
};

console.log(plusOne([9,9]))
