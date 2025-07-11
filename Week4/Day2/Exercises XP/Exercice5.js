const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];
const word = epic.reduce((acc, val) => acc + " " + val);
console.log(word);
