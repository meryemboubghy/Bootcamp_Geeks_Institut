const details = {
  my: "name",
  is: "Rudolf",
  the: "reindeer",
};
let chmp = "";
for (let key in details) {
  chmp += details[key] + " ";
}

chmp = chmp.trim(); // enlever l'espace en fin

console.log(`je m'appelle ${chmp}`);
