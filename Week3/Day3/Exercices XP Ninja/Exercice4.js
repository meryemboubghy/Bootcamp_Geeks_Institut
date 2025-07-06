function biggestNumberInArray(arrayNumber) {
  let max = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    let value = arrayNumber[i];
    if (typeof value === "number" && value > max) {
      max = value;
    }
  }
  return max;
}
const array1 = [-1, 0, 3, 100, 99, 2, 99];
const array2 = ["a", 3, 4, 2];
const array3 = [];

console.log(biggestNumberInArray(array1));
console.log(biggestNumberInArray(array2));
console.log(biggestNumberInArray(array3));
