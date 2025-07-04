// 1. Déclaration du tableau des livres
const allBooks = [
  {
    titre: " Harry Potter",
    auteur: "JKRolling.",
    image:
      "https://fr.images.search.yahoo.com/search/images;_ylt=AwrLAiSO.2doNAIAJvYk24lQ;_ylu=Y29sbwNpcjIEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=image&fr2=piv-web&type=E210FR91105G0&fr=mcafee&guccounter=1&guce_referrer=aHR0cHM6Ly9mci5zZWFyY2gueWFob28uY29tL3NlYXJjaD9mcj1tY2FmZWUmdHlwZT1FMjEwRlI5MTEwNUcwJnA9aW1hZ2U&guce_referrer_sig=AQAAAA6A8Rz724znEObQ8_lERgEAPdmyHC3B6nva7autgUcEa9WWAKCqTRFivWMhQiqBOqQSZjDl6HB47dumyZ85dnB5pL5cQGm6p5oKfyApo6eGD-MKw69koLKPFj_ChDoukgHYZldIMrNcu4MRCKVIxTGfNeeMnLpDKEnffosg0qjx#id=0&iurl=https%3A%2F%2Fimgv3.fotor.com%2Fimages%2Fshare%2Fwonderland-girl-generated-by-Fotor-ai-art-generator.jpg&action=click",
    alreadyRead: true,
  },
  {
    titre: "L'Étranger",
    auteur: "Albert Camus",
    image:
      "https://upload.wikimedia.org/https://fr.images.search.yahoo.com/search/images;_ylt=AwrLAiSO.2doNAIAJvYk24lQ;_ylu=Y29sbwNpcjIEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=image&fr2=piv-web&type=E210FR91105G0&fr=mcafee&guccounter=1&guce_referrer=aHR0cHM6Ly9mci5zZWFyY2gueWFob28uY29tL3NlYXJjaD9mcj1tY2FmZWUmdHlwZT1FMjEwRlI5MTEwNUcwJnA9aW1hZ2U&guce_referrer_sig=AQAAAA6A8Rz724znEObQ8_lERgEAPdmyHC3B6nva7autgUcEa9WWAKCqTRFivWMhQiqBOqQSZjDl6HB47dumyZ85dnB5pL5cQGm6p5oKfyApo6eGD-MKw69koLKPFj_ChDoukgHYZldIMrNcu4MRCKVIxTGfNeeMnLpDKEnffosg0qjx#id=1&iurl=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1080%2F1*8DDN_DRuSBlM74dVYUjR9Q.png&action=click/fr/thumb/1/16/L%27%C3%89tranger_%28Albert_Camus%29.svg/800px-L%27%C3%89tranger_%28Albert_Camus%29.svg.png",
    alreadyRead: false,
  },
];

// 2. Sélection de la section HTML
const section = document.querySelector(".listBooks");

// 3. Boucle sur chaque livre
allBooks.forEach((livre) => {
  // a. Créer un div pour le livre
  const bookDiv = document.createElement("div");

  // b. Créer un paragraphe avec titre et auteur
  const texte = document.createElement("p");
  texte.textContent = `${livre.titre}, écrit par ${livre.auteur}`;

  // c. Si le livre est déjà lu, mettre le texte en rouge
  if (livre.alreadyRead) {
    texte.style.color = "red";
  }

  // d. Créer l’image avec une largeur de 100 px
  const image = document.createElement("img");
  image.setAttribute("src", livre.image);
  image.style.width = "100px";

  // e. Ajouter le texte et l’image au div
  bookDiv.appendChild(texte);
  bookDiv.appendChild(image);

  // f. Ajouter le div à la section principale
  section.appendChild(bookDiv);
});
