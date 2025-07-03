const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// 1. Trier les noms par ordre alphabétique
names.sort();
// 2. Récupérer la première lettre de chaque nom et les joindre
const secretName = names.map((name) => name[0]).join("");
console.log(secretName); // Affiche "ABJKPS"
