const arr1 = [2, 7, 11, 15];
const arr2 = [3, 2, 4];

function printPairs(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(printPairs([2, 7, 11, 15], 9));
console.log(printPairs(arr2, 6));
