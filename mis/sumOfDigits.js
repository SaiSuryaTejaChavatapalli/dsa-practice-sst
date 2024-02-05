function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    const rem = num % 10;
    sum += rem;
    num = Math.floor(num / 10);
  }
  return sum;
}
const result = sumOfDigits(123);
console.log(result);
