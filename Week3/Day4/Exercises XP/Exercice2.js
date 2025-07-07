// 1 :Récupérez le formulaire dans la console.log.

const form = document.querySelector("form");
console.log(form);
// 2 : Récupérez les entrées par leur identifiant et enregistrez-les dans console.log.

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
// const button = document.getElementById("submit");

form.addEventListener("submit", function (event) {
  event.preventDefault(); //pour eveter le rechargement de la page
  console.log("first name ", fname.value);
  console.log("last name ", lname.value);
});
// 3 :
form.addEventListener("submit", function (event) {
  event.preventDefault(); //pour eveter le rechargement de la page
  const firstName = form.elements["firstname"].value;
  const lastName = form.elements["lastname"].value;

  console.log("My first name is :", firstName);
  console.log("My last name is :", lastName);
});
// 4 :
const mform = document.getElementById("form");
const button = document.getElementById("submit");
const ul = document.querySelector(".usersAnswer");
button.addEventListener("click", function (event) {
  event.preventDefault(); //pour eveter le rechargement de la page
  const fname = mform.elements["firstname"].value.trim();
  const lname = mform.elements["lastname"].value.trim();

  if (fname === "" || lname === "") {
    alert("Veuillez remplir tous les champs.");
    return;
  }
  const li1 = document.createElement("li");
  li1.textContent = "First name: " + fname;
  // li1.appendChild(document.createTextNode(li1.value));
  ul.appendChild(li1);
  const li2 = document.createElement("li");
  li2.textContent = "last name: " + lname;
  // li2.appendChild(document.createTextNode(li2.value));
  ul.appendChild(li2);
});
