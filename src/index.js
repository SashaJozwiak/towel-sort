module.exports = function towelSort(matrix) {

  if ((!matrix) || (matrix.length <= 0)) return [];

  let arr = [];

  arr.push(matrix[0])
  arr.push(matrix[1].reverse())

  for (i = 2; i < matrix.length; i++) {
    (i % 2 === 0) ? arr.push(matrix[i]) : arr.push(matrix[i].reverse());
  }

  return [].concat.apply([], arr)
}
