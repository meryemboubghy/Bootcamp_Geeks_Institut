// 1 ;
const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

const ul = navDiv.querySelector("ul");

const newLi = document.createElement("li");
const newText = document.createTextNode("Déconnexion");
newLi.appendChild(newText);

ul.appendChild(newLi);
// 3 :
const firstLi = ul.firstElementChild;
console.log("Premier élément :", firstLi.textContent);

const lastLi = ul.lastElementChild;
console.log("Dernier élément :", lastLi.textContent);
