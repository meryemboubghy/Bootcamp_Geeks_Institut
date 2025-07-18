const Url =
  "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Fetch the data from the API
fetch(Url)
  .then((response) => {
    // Verifier si la reponse a reussi :
    if (!response.ok) {
      throw new Error(`HTTP error! Statut : ${response.status}`);
    }
    return response.json(); // Convertir la reponse en JSON
  })
  .then((data) => {
    console.log("Données reçues de l'API :", data);
  })
  .catch((error) => {
    console.error(
      "Une erreur s'est produite lors de la récupération des données depuis l'API Giphy",
      error
    );
  });
