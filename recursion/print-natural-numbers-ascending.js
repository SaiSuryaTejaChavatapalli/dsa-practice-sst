function naturalIncreasing(n) {
  if (n < 1) return; // base case
  naturalIncreasing(n - 1); // function works correctly for n-1
  console.log(n);
}

naturalIncreasing(5);
