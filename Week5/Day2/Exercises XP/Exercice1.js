const apiUrl =
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
//  Fetch the data from the API
fetch(apiUrl)
  .then((response) => {
    //  Check if the response was successful
    if (!response.ok) {
      throw new Error("HTTP error! Status: " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Received data from API:", data);
  })
  .catch((error) => {
    console.error(
      "Une erreur s'est produite lors de la récupération des données depuis l'API Giphy",
      error
    );
  });
