const prompt = require("prompt-sync")();

let input = prompt("Entrez des mots séparés par des virgules :");
let words = input.split(",").map((word) => word.trim());
let maxLength = Math.max(...words.map((word) => word.length));
console.log("*".repeat(maxLength + 4)); // +4 pour les espaces et les *
for (let word of words) {
  let spaces = " ".repeat(maxLength - word.length); // espace pour aligner à droite
  console.log(`* ${word}${spaces} *`);
}
console.log("*".repeat(maxLength + 4));
