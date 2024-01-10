function upper(n) {
  for (let row = 1; row <= (n - 1) / 2; row += 1) {
    let str = "";
    let leftStars = row;
    for (let i = 1; i <= leftStars; i += 1) {
      str += "*";
    }
    let spaces = n - 2 * row;
    for (let j = 1; j <= spaces; j += 1) {
      str += " ";
    }
    let rightStars = row;
    for (let k = 1; k <= rightStars; k += 1) {
      str += "*";
    }
    console.log(str);
  }
}
function middle(n) {
  str = "";
  for (let i = 1; i <= n; i += 1) {
    str += "*";
  }
  console.log(str);
}
function bottom(n) {
  for (let i = 1; i <= (n - 1) / 2; i += 1) {
    let str = "";
    let leftStars = (n - 1) / 2 - i + 1;
    for (let j = 1; j <= leftStars; j += 1) {
      str += "*";
    }
    let spaces = 2 * i - 1;
    for (let k = 1; k <= spaces; k += 1) {
      str += " ";
    }
    let rightStars = (n - 1) / 2 - i + 1;
    for (let l = 1; l <= rightStars; l += 1) {
      str += "*";
    }
    console.log(str);
  }
}
upper(7);
middle(7);
bottom(7);
