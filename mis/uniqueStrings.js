const arr = ["abc", "char", "c", "d", "abc", "c", "d"];
const obj = {};
for (let i of arr) {
  if (!obj[i]) {
    obj[i] = true;
  }
}
for (let i in obj) {
  console.log(i);
}
