const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result);
// Affiche bread puis le contenu de table vegetables puis chicken puis le contenu de table fruits

const country = "USA";
console.log([...country]);
// change en table de caracters il affiche ["U","S","A"]
let newArray = [...[, ,]];
console.log(newArray);
// Affiche un table de deux element il contien [Undefined,undefined]
