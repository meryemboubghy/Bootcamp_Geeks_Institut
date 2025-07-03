let age = [20, 5, 12, 43, 98, 55];
sum = 0;
for (let i of age) {
  sum += i;
}
console.log("la somme de le table age est : " + sum);

// 2 :
let maxAge = Math.max(...age);
console.log(" l'age le plus grand est : " + maxAge);
