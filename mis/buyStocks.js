let arr1 = [7, 1, 5, 3, 6, 4]; //5
let arr2 = [7, 6, 4, 3, 1]; //0

function bestTimeButStocks(arr) {
  let currMin = arr[0];
  let profit = 0;
  for (let i = 1; i < arr.length; i++) {
    //best time to sell?
    if (arr[i] > currMin) {
      let currProfit = -currMin + arr[i];
      if (currProfit > profit) {
        profit = currProfit;
      }
    }
    //best time to buy?
    if (arr[i] < currMin) {
      currMin = arr[i];
    }
  }
  return profit;
}

console.log(bestTimeButStocks(arr1));
console.log(bestTimeButStocks(arr2));
