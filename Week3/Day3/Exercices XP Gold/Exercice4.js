function isOmnipresent(arr, val) {
  for (let tab of arr) {
    if (!tab.includes(val)) {
      return false;
    }
  }
  return true;
}
console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    1
  )
);
console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    6
  )
);
