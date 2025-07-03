let person1 = {
  fullName: "Meryem Boubghy",
  mass: 66,
  Height: 1.72,
};
let person2 = {
  fullName: "Aziza Cheraqqi",
  mass: 59,
  Height: 1.67,
};
console.log(person1);
console.log(person2);

// 2 :
function calculIMC(person) {
  return person.mass / (person.Height * person.Height);
}
console.log(calculIMC(person1));
console.log(calculIMC(person2));
// 3 :

function compareIMC(p1, p2) {
  const imc1 = calculIMC(person1);
  const imc2 = calculIMC(person2);
  console.log(`${p1.fullName} a un IMC de ${imc1.toFixed(2)}`);
  console.log(`${p2.fullName} a un IMC de ${imc2.toFixed(2)}`);

  if (imc1 > imc2) {
    console.log(`${p1.fullName}  a un IMC plus élevé.`);
  } else if (imc2 > imc1) {
    console.log(`${p2.fullName}  a un IMC plus élevé.`);
  } else {
    console.log(`Les deux personnes ont le même IMC.`);
  }
}
compareIMC(person1, person2);
