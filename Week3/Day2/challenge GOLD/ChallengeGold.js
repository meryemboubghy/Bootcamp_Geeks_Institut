const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
const str = numbers.toString();

console.log("Avant convert :" + numbers + "le type est :" + typeof numbers);
console.log("apres convert :" + typeof str);
// 2 :
cnv = numbers.join("+");
console.log(cnv);
cnv2 = numbers.join(" ");
console.log(cnv2);
cnv3 = numbers.join("");
console.log(cnv3);

// Trie avec la boucle for :
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - 1 - i; j++) {
    if (numbers[j] < numbers[j + 1]) {
      let tmp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = tmp;
    }
  }
}
console.log(numbers);
