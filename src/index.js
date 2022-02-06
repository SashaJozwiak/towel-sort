
// You should implement your task here.

module.exports = function towelSort(matrix) {

  if (!matrix) return [];
  if (matrix.length <= 0) return [];

  const arr = [];

  arr.push(matrix[0])
  arr.push(matrix[1].reverse())

  for (i = 2; i < matrix.length; i++) {
    if (i % 2 === 0) {
      arr.push(matrix[i])

    } else {
      arr.push(matrix[i].reverse())
    }
  }

  let result = [].concat.apply([], arr)

  return result;
}
