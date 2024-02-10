const arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [20, 28, 29],
];

function printRows(arr, m, n) {
  let str = "";
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      str += arr[row][col] + ",";
    }
  }
  return str;
}
console.log(printRows(arr1, 4, 3));
