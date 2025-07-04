function displayNumbersDivisible(divisor) {
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(`le nombres ${i} est divisibles par ${divisor} .`);
      sum += i;
    }
  }
  // la sum de tous les nombres divisibles par 23 :
  console.log("la soumme est :" + sum);
}
displayNumbersDivisible(3);
