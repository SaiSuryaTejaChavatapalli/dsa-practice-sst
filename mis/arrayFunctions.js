const arr = [1, 2, 3, 4, 5];

function square(item) {
  return item * item;
}

const squares = arr.map(square);
console.log("squares", squares);

function cube(item) {
  return item * item * item;
}
const cubes = arr.map(cube);
console.log("cubes", cubes);

function isEven(item) {
  if (item % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const evenOrOdd = arr.map(isEven);
console.log("evenOrOdd", evenOrOdd);
