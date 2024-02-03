function solve(a, b, c) {
  //ax^2+bx+c
  let sqrRoot = Math.sqrt(b * b - 4 * a * c);
  let root1 = (-b + sqrRoot) / (2 * a);
  let root2 = (-b - sqrRoot) / (2 * a);
  console.log(`Roots are ${root1} and ${root2}`);
}
solve(2, 5, 3);
