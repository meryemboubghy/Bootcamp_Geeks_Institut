function changeEnough(itemPrice, amountOfChange) {
  const [quarters, dimes, nickel, penny] = amountOfChange;
  const total = quarters * 0.25 + dimes * 0.1 + nickel * 0.05 + penny * 0.01;
  return total >= itemPrice;
}

console.log(changeEnough(14.11, [2, 100, 0, 0])); //=> returns false
console.log(changeEnough(0.75, [0, 0, 20, 5])); //=> returns true

// 4. Pour illustrer :
console.log(changeEnough(4.25, [25, 20, 5, 0]));
