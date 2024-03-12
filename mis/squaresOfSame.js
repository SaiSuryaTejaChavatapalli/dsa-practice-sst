let arr1 = [1, 2, 4, 5];
let arr2 = [1, 4, 16, 25];

function check(arr1, arr2) {
  let obj = {};
  if (arr1.length !== arr2.length) return false;
  for (let i of arr1) {
    let k = i * i;
    if (!obj[k]) {
      obj[k] = 1;
    } else {
      obj[k] += 1;
    }
  }

  for (let j of arr2) {
    if (!obj[j]) {
      return false;
    } else {
      obj[j] -= 1;
    }
  }
  return true;
}

console.log(check(arr1, arr2));
