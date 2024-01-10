function upper(n) {
  for (let i = 1; i <= n; i += 1) {
    let str = "";
    let spaces = n - i;
    let stars = 2 * i - 1;
    for (let j = 1; j <= spaces; j += 1) {
      str += " ";
    }
    for (let k = 1; k <= stars; k += 1) {
      str += "*";
    }
    console.log(str);
  }
}

function lower(n) {
  // rows are n-1
  for (let i = 1; i <= n - 1; i += 1) {
    //spaces=row number
    let str = "";
    let spaces = i;
    for (let j = 1; j <= spaces; j += 1) {
      str += " ";
    }
    let stars = 2 * (n - i) - 1;
    for (let k = 1; k <= stars; k += 1) {
      str += "*";
    }
    console.log(str);
  }
}
function pattern() {
  upper(3);
  lower(3);
}
pattern();
