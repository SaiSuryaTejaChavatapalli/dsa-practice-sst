function Pattern2(n) {
  //repeat for rows
  for (let row = 1; row <= n; row += 1) {
    //Do the task
    let str = "";
    for (let col = 1; col <= row; col += 1) {
      str += "*";
    }
    console.log(str);
  }
}
Pattern2(4);
