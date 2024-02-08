function upper(n) {
  // rows=n
  for (let row = 1; row <= n; row++) {
    let spaces = row - 1;
    let str = "";
    for (let i = 1; i <= spaces; i++) {
      str += " ";
    }
    let nums = row;
    for (let j = nums; j <= n; j++) {
      str += j + " ";
    }
    console.log(str);
  }
}
function lower(n) {
  //n-1 rows
  let rows = n - 1;
  for (let row = 1; row <= rows; row++) {
    let spaces = n - row - 1;
    let str = "";
    for (let i = 1; i <= spaces; i++) {
      str += " ";
    }
    let nums = n - row;
    for (let j = nums; j <= n; j++) {
      str += j + " ";
    }
    console.log(str);
  }
}

function pattern(n) {
  upper(n);
  lower(n);
}
pattern(7);
