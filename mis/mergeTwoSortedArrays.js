const arr1 = [1, 3, 5, 6, 9];
const arr2 = [4, 5, 7, 8, 9, 10, 17];
const result = [];
let m = 5;
let n = 7;
let i = 0;
let j = 0;
let k = 0;

while (i < m && j < n)
  if (arr1[i] < arr2[j]) {
    result[k] = arr1[i];
    i++;
    k++;
  } else {
    result[k] = arr2[j];
    j++;
    k++;
  }
while (i < m) {
  result[k] = arr1[i];
  i++;
  k++;
}
while (j < n) {
  result[k] = arr2[j];
  j++;
  k++;
}

console.log("Result array", result);
