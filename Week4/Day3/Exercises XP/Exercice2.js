function displayStudentInfo({ first, last }) {
  //destructuring
  return ` your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({ first: "Elie", last: "Schoppik" }));
console.log(displayStudentInfo({ first: "mery", last: "mery" }));
