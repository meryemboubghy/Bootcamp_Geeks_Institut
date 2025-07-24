let currentPokemon = 1;
const image = document.getElementById("pokemon_Image");
const name_pok = document.getElementById("name");
const id = document.getElementById("id");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const type = document.getElementById("type");
const load = document.getElementById("load");

// Fonction pour afficher un pokemon
async function fetchPokemon(pokeId) {
  // load.innerHTML = `Loading...`;
  name_pok.textContent = "";
  id.textContent = "";
  height.textContent = "";
  weight.textContent = "";
  type.textContent = "";
  image.hidden = true;
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeId}` // Utilisation de l'ID du Pokémon
    );
    if (!response.ok) {
      throw new Error("Pokemon not found");
    }
    const data = await response.json();
    currentPokemon = data.id;
    image.src = data.sprites.front_default;
    image.hidden = false;
    name_pok.textContent = data.name;
    id.textContent = `ID: ${data.id}`;
    height.textContent = `Height: ${data.height / 10} m`;
    weight.textContent = `Weight: ${data.weight / 10} kg`;
    type.textContent = `Type: ${data.types.map((t) => t.type.name).join(", ")}`;
  } catch (error) {
    load.innerHTML = `<span style="color: red;">Oh non ! Ce Pokémon n'est pas disponible…</span>`;
  }
}
function getData() {
  const randomId = Math.floor(Math.random() * 1010) + 1;
  fetchPokemon(randomId);
}
function getPrevious() {
  if (currentPokemon > 1) {
    fetchPokemon(currentPokemon - 1);
  }
}
function getNext() {
  fetchPokemon(currentPokemon + 1);
}
fetchPokemon(currentPokemon);
