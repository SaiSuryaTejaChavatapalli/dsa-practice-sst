let matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// output : [[1,4,7],[2,5,8],[3,6,9]]

let matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
];
// output : [[1,4],[2,5],[3,6]]

function transposeOfMatrix(matrix) {
  // create dummy object named result

  let result = Array(matrix[0].length);
  for (let i = 0; i < matrix[0].length; i++) {
    result[i] = Array(matrix.length);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
}

console.log(transposeOfMatrix(matrix1));
console.log(transposeOfMatrix(matrix2));
