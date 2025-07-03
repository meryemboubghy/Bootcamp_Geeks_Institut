let numbers = [123, 8409, 100053, 333333333, 7];

for (let i in numbers) {
  let nbr = numbers[i];
  if (nbr % 3 === 0) {
    console.log(`le numero ${nbr} est divisible par trois`);
  } else {
    console.log(`le numero ${nbr} n'est pas divisible  par trois`);
  }
}
console.log("******************************************************");
// pour return resultat trus or false :
for (let num of numbers) {
  console.log(num % 3 === 0);
}
