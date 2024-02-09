const arr1 = [1, 2, 3, 5, 3, 6, 7, 7];
const arr2 = [1, 3, 4, 4];
// You can't use extra array

function dissapearNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    let x = Math.abs(arr[i]);

    if (arr[x - 1] > 0) {
      arr[x - 1] = arr[x - 1] * -1;
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
}

console.log(dissapearNumbers(arr1));
console.log(dissapearNumbers(arr2));
