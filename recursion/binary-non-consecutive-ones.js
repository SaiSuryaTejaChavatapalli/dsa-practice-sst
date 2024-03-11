function binaryNonConsecutiveOnes(n) {
  if (n === 1) return 2;
  if (n === 2) return 3;
  return binaryNonConsecutiveOnes(n - 1) + binaryNonConsecutiveOnes(n - 2);
}

const res1 = binaryNonConsecutiveOnes(5);
const res2 = binaryNonConsecutiveOnes(4);
const res3 = binaryNonConsecutiveOnes(3);
console.log("Res-5", res1);
console.log("Res-4", res2);
console.log("Res-3", res3);
