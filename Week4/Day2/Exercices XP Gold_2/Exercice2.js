const Numbers = [1, 2, 3, 6, 9, 1, 6, 9, 5, 7, 5, 0];
const newTable = [];
for (let i = 0; i < Numbers.length; i++) {
  if (!newTable.includes(Numbers[i])) {
    newTable.push(Numbers[i]);
  }
}
console.log(newTable);
