const twoSum = function (arr, target) {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] === target) {
      return [i + 1, j + 1];
      //It is one bases index
    } else if (arr[i] + arr[j] > target) {
      j--;
    } else {
      i++;
    }
  }
};
const arr1 = [2, 7, 11, 15];
const arr2 = [2, 3, 4];
const arr3 = [-1, 0];
console.log(twoSum(arr1, 9));
console.log(twoSum(arr2, 6));
console.log(twoSum(arr3, -1));
