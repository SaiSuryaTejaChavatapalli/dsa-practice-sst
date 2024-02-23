function fibanocci(n) {
  if (n === 0 || n == 1) return n;
  return fibanocci(n - 1) + fibanocci(n - 2);
}

console.log(fibanocci(5));
