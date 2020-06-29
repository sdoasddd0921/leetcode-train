// 旋转图像

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	const len = matrix.length
	// 先转置
	for (let i = 0; i < len; i++) {
		for (let j = i + 1; j < len; j++) {
			const temp = matrix[i][j]
			matrix[i][j] = matrix[j][i]
			matrix[j][i] = temp
		}
	}
	// 然后以竖中轴对称（这里其实就是倒叙操作）
	matrix.forEach(arr => arr.reverse())
};

rotate([
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
])
