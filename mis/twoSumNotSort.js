const arr1 = [7, 2, 13, 11];
const arr2 = [7, 3, 5];
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = [arr[i], i];
  }
  arr.sort((x, y) => x[0] - y[0]);
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i][0] + arr[j][0] === target) {
      return [arr[i][1], arr[j][1]];
    } else if (arr[i][0] + arr[j][0] > target) {
      j--;
    } else {
      i++;
    }
  }
}

console.log(twoSum(arr1, 9));
console.log(twoSum(arr2, 8));
