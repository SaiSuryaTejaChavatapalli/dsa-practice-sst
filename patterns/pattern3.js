function Pattern3(n) {
  //loop for repeat for no.of rows
  for (let row = 1; row <= n; row += 1) {
    let str = "";
    //no of spaces
    let spaces = n - row;
    //spaces concatenation
    for (let j = 1; j <= spaces; j += 1) {
      str += " ";
    }
    //no.of stars
    let stars = row;
    //stars concatenation
    for (let k = 1; k <= stars; k += 1) {
      str += "*";
    }
    console.log(str);
  }
}
Pattern3(5);
