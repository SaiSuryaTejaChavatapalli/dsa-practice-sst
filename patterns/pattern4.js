function Pattern4(n) {
  for (let row = 1; row <= n; row += 1) {
    let str = "";
    // no.of spaces
    let spaces = n - row;
    // spaces concatenation
    for (let j = 1; j <= spaces; j += 1) {
      str += " ";
    }
    //starts count
    let stars = 2 * row - 1;
    //stars concatenation
    for (k = 1; k <= stars; k += 1) {
      str += "*";
    }
    console.log(str);
  }
}
Pattern4(5);
