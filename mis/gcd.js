function gcd(a, b) {
  let minNumber = Math.min(a, b);
  let res = 1;
  for (let i = 2; i <= minNumber; i += 1) {
    if (a % i === 0 && b % i === 0) {
      res = i;
    }
  }
  return res;
}

const result = gcd(28, 24);
console.log("GCD1:", result);
const result2 = gcd(78, 98);
console.log("GCD2:", result2);
