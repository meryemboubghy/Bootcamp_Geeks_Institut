// fonction declaration :

function poids(poid) {
  return poid * 1000;
}
console.log(poids(2));
// 2 : Function Expression :
const poidExp = function (poid) {
  return poid * 1000;
};
console.log(poidExp(3));
// 3 : la differences entre la declaration de fonction et l'expression de fonction
// => la declaration de fonction est hoistee (disponible avant la definition )
// => l'expression de fonction elle n'est pas hoistee donc ne peut etre utilisee qu'apres sa definition

// fonction fleshe:
const poidsFlesh = (poid) => poid * 1000;
console.log(poidsFlesh(4));
