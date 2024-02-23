// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

const arr = [-1, 0, 1, 2, -1, -4];

function twoSum(arr, target) {
  arr.sort((x, y) => x - y);
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] > target) {
      j--;
    } else if (arr[i] + arr[j] < target) {
      i++;
    } else {
      return [arr[i], arr[j]];
    }
  }
}
