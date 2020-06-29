// 有效的数独
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const F = Math.floor
const get9arr = () => {
  return new Array(9).fill(0).map(() => [])
}
const isOk = arr => {
  return arr.map(row => row.length === new Set(row).size).every(Boolean)
}
var isValidSudoku = function(board) {
  // 直接暴力解法，找到复合题意的所有集合并全部检测是否 ok
  const lines = get9arr()
  const rows = get9arr()
  const cells = get9arr()
  board.forEach((arr, x) => {
    arr.forEach((i, y) => {
      if (i !== '.') {
        lines[x].push(i)
        rows[y].push(i)
        cells[F(x/3)*3+F(y/3)].push(i)
      }
    })
  })
  return [lines, rows, cells].map(isOk).every(Boolean)
};
isValidSudoku([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
])