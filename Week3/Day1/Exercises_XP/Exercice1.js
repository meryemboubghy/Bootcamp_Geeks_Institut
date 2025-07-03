const people = ["Greg", "Mary", "Devon", "James"];
// 1 : Supprimer "Greg"
people.shift();
console.log(people);
// 2 :  Remplacer "James" par "Jason"
// Methode 1:
const index = people.indexOf("James");
if (index !== -1) {
  people[index] = "Jason";
}
console.log(people);
// Methode 2 : la function splice():
people.splice(people.indexOf("James"), 1, "Jason");
console.log(people);
// 3 : Ajouter un nom dans le table
people.push("Meryem");
console.log(people);
// 4 : Trouver l'index de valeur
console.log("l'index de Mary est :" + people.indexOf("Mary"));
// 5 :
console.log(people.slice(1, 3));
// 6 :
console.log("l'index de Foo est :" + people.indexOf("Foo"));
// il renvoie -1 parceque l'element n'existe pas dans le tableau .
//  7 :
const last = people[people.length - 1];
console.log("la dernier element dans la table est : " + last);

// ************Partie 2 *************
// 1 :
console.log("les elements dans la table people : \n");
for (let i in people) {
  console.log(people[i]);
}
// 2 :
console.log("les elements dans la table apres avoir 'Devon' : \n");

for (let p in people) {
  console.log(people[p]); //pour affichier les elements
  if (people[p] === "Devon") {
    break;
  }
}
