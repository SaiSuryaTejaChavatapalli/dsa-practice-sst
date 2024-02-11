function multiply(mat1, m, n, mat2, n, k) {
  // If matrix1 is (m x n) dimension and  matrix2 is (n x k) dimension, Then resultant matrix is (m x k) dimension
  // So we need to form empty matrix with (m x k) dimension
  const result = Array(m);
  for (let i = 0; i < m; i++) {
    result[i] = Array(k);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < k; j++) {
      // c[i][j] will give you the every value of resulantant matrix
      let c = 0;
      for (let x = 0; x < n; x++) {
        c = c + mat1[i][x] * mat2[x][j];
      }
      result[i][j] = c;
    }
  }
  console.log(result);
}

const mat1 = [
  [1, 1],
  [2, 2],
  [3, 3],
];
const mat2 = [
  [1, 1, 1],
  [2, 2, 2],
];
multiply(mat1, 3, 2, mat2, 2, 3);
