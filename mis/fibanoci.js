function printFib(n) {
  if (n == 0) {
    console.log(0);
    return;
  }
  if (n >= 1) {
    console.log(0);
    console.log(1);
  }
  let secondLast = 0;
  let last = 1;
  for (let i = 2; i <= n; i += 1) {
    let ans = last + secondLast;
    console.log(ans);
    secondLast = last;
    last = ans;
  }
}

printFib(5);
