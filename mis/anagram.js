let str1 = "zam";
let str2 = "maz";

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  obj = {};
  for (let i of str1) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i] += 1;
    }
  }

  for (let j of str2) {
    if (!obj[j]) return false;
    else {
      obj[j] -= 1;
    }
  }
  return true;
}

if (anagram(str1, str2)) {
  console.log("Anagram");
} else {
  console.log("Not Anagram");
}
