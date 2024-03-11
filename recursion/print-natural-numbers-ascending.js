function naturalRecursionAscending(n) {
  //base
  if (n < 1) return;
  naturalRecursionAscending(n - 1);
  console.log(n);
}

naturalRecursionAscending(5);
