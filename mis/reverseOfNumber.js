const num = 1234;

// 0*10+4=4
// 4*10+3=43
// 43*10+2=432
// 432*10+1=4321
function reverseOfNum(n) {
  let revNum = 0;
  while (n > 0) {
    const lastDigit = n % 10;
    revNum = revNum * 10 + lastDigit;
    n = Math.floor(n / 10);
    console.log(lastDigit);
  }
  return revNum;
}

const result = reverseOfNum(num);
console.log(result);
