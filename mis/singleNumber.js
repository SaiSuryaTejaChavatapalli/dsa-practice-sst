const arr = [4, 1, 2, 1, 3, 2, 3, 4, 5, 5, 6];
let obj = {};
for (let i of arr) {
  if (!obj[i]) {
    obj[i] = 1;
  } else {
    obj[i] += 1;
  }
}
for (let i of Object.entries(obj)) {
  if (i[1] === 1) {
    console.log(i[0]);
  }
}

function singleNumber(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
}
console.log(singleNumber(arr));
