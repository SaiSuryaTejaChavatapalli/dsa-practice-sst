function Pattern1(n) {
  for (let row = 1; row <= n; row += 1) {
    let str = "";
    for (let col = 1; col <= n; col += 1) {
      str += "*";
    }
    console.log(str);
  }
}

Pattern1(3);
