function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function separate(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    if (arr[i] == 1) {
      swap(arr, i, j);
      j--;
    } else {
      i++;
    }
  }
}
const arr = [1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1];
console.log("Before separate", arr);
separate(arr);
console.log("After separate", arr);
