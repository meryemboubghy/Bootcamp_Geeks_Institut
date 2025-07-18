fetch("https://www.swapi.tech/api/starships/9/")
  .then((response) => response.json())
  .then((objectStarWars) => console.log(objectStarWars.result));
const url = "https://www.swapi.tech/api/starships/9/";

// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
async function starships() {
  try {
    const reponse = await fetch(url);

    if (!reponse.ok) {
      // throw new Error(`HTTP error! Status: ${reponse.status}`);
      throw new Error(`HTTP error! Status: ${reponse.status}`);
    }
    const data = await reponse.json();
    console.log(data.result);
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération des données depuis l'API Star Wars",
      error
    );
  }
}

starships();
