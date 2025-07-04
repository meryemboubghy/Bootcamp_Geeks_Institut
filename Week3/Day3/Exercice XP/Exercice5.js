// 1. Récupérez le <div> et loggez-le
const container = document.getElementById("container");
console.log(container);

// 2. Changez "Pete" en "Richard"
const firstUl = document.querySelectorAll("ul")[0];
firstUl.children[1].textContent = "Richard";

// 3. Supprimez le 2e <li> du 2e <ul>
const secondUl = document.querySelectorAll("ul")[1];
secondUl.removeChild(secondUl.children[1]); // "Sarah"

// 4. Remplacez le premier <li> de chaque <ul> par votre nom
const uls = document.querySelectorAll("ul");
uls.forEach((ul) => {
  ul.children[0].textContent = "Meryem";
});

// 5. Ajoutez la classe "student_list" aux deux <ul>
uls.forEach((ul) => {
  ul.classList.add("student_list");
});

// 6. Ajoutez les classes "university" et "attendance" au premier <ul>
firstUl.classList.add("university", "attendance");

// 7. Ajoutez une couleur d’arrière-plan au <div> et du padding
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

// 8. Cacher le <li> contenant "Dan" (dernier li du second ul maintenant)
const liList = secondUl.querySelectorAll("li");
liList.forEach((li) => {
  if (li.textContent === "Dan") {
    li.style.display = "none";
  }
});

// 9. Ajoutez une bordure au <li> contenant "Richard"
const richardLi = Array.from(document.querySelectorAll("li")).find(
  (li) => li.textContent === "Richard"
);
if (richardLi) {
  richardLi.style.border = "2px solid black";
}

// 10. Modifiez la taille de police de tout le body
document.body.style.fontSize = "20px";

// Bonus : si background du div est bleu clair → alert
if (container.style.backgroundColor === "lightblue") {
  // Récupérer les noms à l’intérieur des deux <ul>
  const names = [];
  uls.forEach((ul) => {
    Array.from(ul.children).forEach((li) => {
      if (li.style.display !== "none") names.push(li.textContent);
    });
  });
  alert(`Bonjour ${names.join(" et ")}`);
}
