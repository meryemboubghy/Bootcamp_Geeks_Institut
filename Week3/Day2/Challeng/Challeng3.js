const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
console.log("Type de table avant la converture :" + typeof numbers);
const convert = numbers.toString();
console.log("Type de table Apres la converture :" + typeof convert);

console.log("Avec join('+'):", numbers.join("+"));
console.log("Avec join(' '):", numbers.join(" "));
console.log("Avec join(''):", numbers.join(""));
// Bonus :
let sort = [...numbers];
for (let i = 0; i < sort.length - 1; i++) {
  for (let j = 0; j < sort.length - 1 - i; j++) {
    if (sort[j] < sort[j + 1]) {
      let tmp = sort[j];
      sort[j] = sort[j + 1];
      sort[j + 1] = tmp;
    }
  }
}
console.log(sort);
