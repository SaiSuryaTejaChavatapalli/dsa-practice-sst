const arr1 = [
  [1, 2, 3, 10],
  [4, 5, 6, 11],
  [7, 8, 9, 12],
];

function printCols(arr, m, n) {
  let str = "";
  for (let col = 0; col < n; col++) {
    for (let row = 0; row < m; row++) {
      str += arr[row][col] + ",";
    }
  }
  return str;
}

console.log(printCols(arr1, 3, 4));
