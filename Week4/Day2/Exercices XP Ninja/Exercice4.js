const letters = ["x", "y", "z", "z"];
const res = [];
for (i = 0; i < letters.length; i++) {
  const letter = letters[i];
  if (res[letter]) {
    res[letter]++;
  } else {
    res[letter] = 1;
  }
}
console.log(res);
// Methode reduce :

const result = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

console.log(result);
