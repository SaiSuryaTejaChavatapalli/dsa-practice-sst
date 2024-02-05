// One of the way to calculate lcm is, we know a*b=gcd*lcm

function gcd(a, b) {
  let ans = 1;
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
      ans = i;
    }
  }
  return ans;
}

function lcm(a, b) {
  let G = gcd(a, b);
  let L = (a * b) / G;
  return L;
}

const result = lcm(9, 12);
console.log(result);
console.log(lcm(56, 78));
