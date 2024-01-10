function Pattern5(n) {
  //repeat for no.of rows
  for (let row = 1; row <= n; row += 1) {
    //stars count=n-row+2
    let str = "";
    //stars concatenation
    for (let col = 1; col <= n - row + 1; col += 1) {
      str += "*";
    }
    console.log(str);
  }
}

Pattern5(5);
