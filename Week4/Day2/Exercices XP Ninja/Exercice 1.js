const data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Cuty",
    age: 5,
    type: "rabbit",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },
  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
  {
    name: "Rex",
    age: 10,
    type: "dog",
  },
];
let SumAge = 0;
for (let key in data) {
  SumAge += data[key].age;
}
console.log(SumAge);

// 2 :
const totalAge = data.reduce((sum, animal) => {
  if (animal.type === "dog") {
    return sum + animal.age * 7;
  }
  return sum;
}, 0);
console.log(totalAge);
