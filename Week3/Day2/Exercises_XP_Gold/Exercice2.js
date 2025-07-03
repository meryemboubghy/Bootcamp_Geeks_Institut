const prompt = require("prompt-sync")();

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina",
};
let nom = prompt("Veulliez entrer son nom  :");

if (nom in guestList) {
  console.log(`Hi! I'm ${nom}, and I'm from  ${guestList[nom]} .`);
} else {
  console.log("Hi! I'm a guest.");
}
