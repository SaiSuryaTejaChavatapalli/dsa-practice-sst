function fact(n) {
  // base case
  if (n == 1) {
    return 1;
  }
  return n * fact(n - 1);
}

console.log(fact(15));

// Using loops
function factorialWithLoops(n) {
  let ans = 1;
  for (let i = n; i >= 1; i--) {
    ans = ans * i;
  }
  return ans;
}
console.log(factorialWithLoops(15));
