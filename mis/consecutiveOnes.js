const arr1 = [1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0];
const arr2 = [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1];

function consecutiveOnes(arr) {
  let maxOnes = 0;
  let consOnes = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      consOnes += 1;
    } else {
      // If current element is zero, the the consecutive breaks, so we updates max consecutive zeros and rests consecutive ones
      if (consOnes > maxOnes) {
        maxOnes = consOnes;
        consOnes = 0;
      }
    }
  }
  //This Corner case is to check if max ones ends in the array, then we are not updating maxOnes, so we did it below
  // Below can be achived by Math.max(consOnes,maxOnes)
  if (consOnes > maxOnes) maxOnes = consOnes;
  return maxOnes;
}

console.log(consecutiveOnes(arr1));
console.log(consecutiveOnes(arr2));
