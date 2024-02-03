//n=4
function pattern8(n) {
  for (let row = 1; row <= n; row += 1) {
    let str = "";
    let spaces = n - row;
    for (let i = 1; i <= spaces; i += 1) {
      str += " ";
    }
    let counter = 1;
    for (let j = 1; j <= row; j += 1) {
      str += counter;
      counter++;
    }

    let counter2 = row - 1;
    for (let k = 1; k <= row - 1; k += 1) {
      str += counter2;
      counter2--;
    }
    console.log(str);
  }
}

pattern8(4);
