// 1 :
const colors = ["red", "yellow", "bleu", "black", "white"];
// 2 :
for (let i = 0; i < colors.length; i++) {
  console.log(`Mon choix n °${i + 1} est ${colors[i]}`);
}
// 3 :
console.log(
  "*****************************************************************"
);
const suffixes = ["premier", "deuxième", "troisième", "quatrième", "cinquième"];
for (let i = 0; i < colors.length; i++) {
  console.log(`Mon ${suffixes[i]} choix est ${colors[i]}`);
}
