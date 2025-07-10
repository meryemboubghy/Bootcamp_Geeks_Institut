// function makeJuice(taille) {
//   console.log(`la taille est ${taille}`);

//   function addIngredients(ing1, ing2, ing3) {
//     const div = document.createElement("div");
//     div.innerHTML = `The client wants a ${taille} juice , containing ${ing1} ,
//     ${ing2} ,${ing3}`;
//     document.body.appendChild(div);
//   }
//   addIngredients("orange", "banan", "pomme");
// }
// makeJuice("petite");
// Partie 2 :
function makeJuice(taille) {
  const ingredients = [];
  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1, ing2, ing3);
  }

  function displayJuice() {
    const div = document.createElement("div");
    div.innerHTML = `The client wants a ${taille} juice, containing:
                    <ul>
                        ${ingredients.map((ing) => `<li>${ing}</li>`).join("")}
                    </ul>
                `;
    document.body.appendChild(div);
  }
  addIngredients("banana", "banana", "osafi");
  displayJuice();
}
makeJuice("grande");
