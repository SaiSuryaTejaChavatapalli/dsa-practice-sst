const arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function printCols(arr, m, n) {
  let str = "";
  for (let col = 0; col < n; col++) {
    if (col % 2 == 0) {
      for (let row = 0; row < m; row++) {
        str += arr[row][col];
      }
    } else {
      for (let row = m - 1; row > 0; row--) {
        str += arr[row][col];
      }
    }
  }
  return str;
}
console.log(printCols(arr1, 3, 3));
