const prompt = require("prompt-sync")();

// let input = parseInt(prompt("Veulliez entrer un nombre :"));
// //Verification du type
console.log("Type avant conversin ", typeof input);
// Convertir en nombre :
let number = Number(input);

//verification si la conversion est reussie :
if (!isNaN(input)) {
  console.log("Merci ! vous entre le nombre :", input);
  console.log("Type après conversion :", typeof input); // "number"
} else {
  console.log("Ce que vous avez entré n'est pas un nombre valide.");
}
// 2 :
// let input2 = parseInt(prompt("Veulliez entrer un nouveux nombre :"));
// while (input2 < 10) {
//   input2 = parseInt(
//     prompt("Veulliez entrer un nouveux nombre inférieur à 10  :")
//   );
// }

// console.log("Merci ! Le nombre est supérieur à 10 :", input2);
