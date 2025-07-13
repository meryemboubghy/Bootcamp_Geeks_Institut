function findTwoNumbers(arr, target) {
  const seen = new Set();

  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      return [complement, num];
    }
    seen.add(num);
  }

  return null;
}
console.log(findTwoNumbers([1, 2, 3], 4));
console.log(findTwoNumbers([10, 20, 5, 7], 17));
console.log(findTwoNumbers([1, 2, 3], 6));
