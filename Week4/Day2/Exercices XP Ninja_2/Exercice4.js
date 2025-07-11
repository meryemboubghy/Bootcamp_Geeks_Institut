function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // Échanger les éléments
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([1, 2]));
console.log(reverseArray([]));
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
