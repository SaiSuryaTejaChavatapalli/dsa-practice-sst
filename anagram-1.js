function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const obj1 = {};
  const obj2 = {};
  for (let i of str1) {
    if (obj1[i] > 0) {
      obj1[i] += 1;
    } else {
      obj1[i] = 1;
    }
  }
  console.log("obj1", obj1);
  for (let i of str2) {
    if (obj2[i] > 0) {
      obj2[i] += 1;
    } else {
      obj2[i] = 1;
    }
  }
  console.log("obj2", obj1);
  for (let i in obj1) {
    if (obj1[i] !== obj2[i]) return false;
  }
  return true;
}

const result = isAnagram("a", "ab");
console.log(result);
