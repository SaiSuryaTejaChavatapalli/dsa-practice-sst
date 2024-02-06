const arr = [1, 2, 4, 56, 78, 90];
const arr2 = [1, 2, 3, 4, 5];
function swap(arr, i, j) {
  //function swaps the elements of the array at index i and j
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function reverse(arr) {
  let i = 0; //starting index
  let j = arr.length - 1; // last index
  while (i <= j) {
    swap(arr, i, j);
    i++;
    j--;
  }
}
console.log("Before arr:", arr);
reverse(arr);
console.log("After arr:", arr);
console.log("------------------------------------------");
console.log("Before arr2:", arr2);
reverse(arr2);
console.log("After arr2:", arr2);
console.log("------------------------------------------");
let numArray = [1, 2, 3, 4, 5];
let newArray = [];
for (let i = numArray.length - 1; i >= 0; i--) {
  newArray.push(numArray[i]);
}
console.log(newArray);
