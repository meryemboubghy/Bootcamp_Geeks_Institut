function uniqueElement(arr) {
  return [...new Set(arr)];
}
const list = [1, 2, 3, 3, 3, 3, 4, 5];
const newList = uniqueElement(list);
console.log(newList);
