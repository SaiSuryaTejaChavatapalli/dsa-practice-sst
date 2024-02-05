function decimalToBinary(num) {
  let str = "";
  while (num > 0) {
    if (num % 2 == 0) {
      str = "0" + str;
    } else {
      str = "1" + str;
    }
    num = Math.floor(num / 2);
  }
  return str;
}
const result = decimalToBinary(2);
console.log(result);
