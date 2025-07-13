const quotes = [
  {
    id: 0,
    author: "Charles Lindbergh",
    quote:
      " Life is like a lzndsczpe. You live in the midst of it but can describe it only from the vantage point of distance.",
    likes: 0,
  },
  {
    id: 1,
    author: "Alan Kay",
    quote: "The best way to predict the future is to invent it.",
    likes: 0,
  },
  {
    id: 2,
    author: "Steve Jobs",
    quote: "Your time is limited, don't waste it living someone else's life.",
    likes: 0,
  },
  {
    id: 3,
    author: "Alan Kay",
    quote: "The best way to predict the future is to invent it.",
    likes: 0,
  },
];

let currentQuoteIndex = null;
function generateQuote() {
  const section = document.getElementById("Generate_section");
  const randomIndext = Math.floor(Math.random() * quotes.length);
  const quotObj = quotes[randomIndext];

  section.innerHTML = ` <p><strong>Quote #${quotObj.id}:</strong> "${quotObj.quote}"</p>
                      <p><em>- ${quotObj.author}</em></p>
                      <p>Likes : ${quotObj.likes}</p>`;
}
function AjouteQuote(quoteObj) {
  const section = document.getElementById("Generate_section");

  const quoteDiv = document.createElement("div");
  quoteDiv.innerHTML = `
    <p><strong>Quote #${quoteObj.id}:</strong> "${quoteObj.quote}"</p>
    <p><em>- ${quoteObj.author}</em></p>
    <p>Likes : ${quoteObj.likes}</p>
    <hr>
  `;
  section.appendChild(quoteDiv);
}
document.getElementById("myform").addEventListener("submit", function (event) {
  event.preventDefault();

  const quoteText = document.getElementById("input_quote").value.trim();
  const authorText = document.getElementById("input_author").value.trim();

  if (quoteText !== "" && authorText !== "") {
    const newQuote = {
      id: quotes.length,
      quote: quoteText,
      author: authorText,
      likes: 0,
    };

    quotes.push(newQuote);

    //  Ajoute dans la section directement
    AjouteQuote(newQuote);
    currentQuoteIndex = newQuote.id;

    document.getElementById("myform").reset();
  }
});
// Compter les caractères
function countCharacters(withSpaces) {
  if (currentQuoteIndex === null) return alert("Generate a quote first!");
  const quote = quotes[currentQuoteIndex].quote;
  const length = withSpaces ? quote.length : quote.replace(/\s/g, "").length;
  alert(`Character count: ${length}`);
}
// Compter les mots
function countWords() {
  if (currentQuoteIndex === null) return alert("Generate a quote first!");
  const quote = quotes[currentQuoteIndex].quote;
  const wordCount = quote.trim().split(/\s+/).length;
  alert(`Word count: ${wordCount}`);
}
// Ajouter un like
function likeQuote() {
  if (currentQuoteIndex === null) return alert("Generate a quote first!");
  quotes[currentQuoteIndex].likes++;
  generateQuote(); // re-affiche pour mettre à jour le compteur
}
let filteredQuotes = [];
let filteredIndex = 0;

// Filtrage par auteur
document.getElementById("filterForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const authorName = document
    .getElementById("filterAuthor")
    .value.trim()
    .toLowerCase();

  // Filtrer les citations
  filteredQuotes = quotes.filter((q) =>
    q.author.toLowerCase().includes(authorName)
  );
  filteredIndex = 0;

  if (filteredQuotes.length > 0) {
    showFilteredQuote();
    document.getElementById("prevBtn").style.display = "inline-block";
    document.getElementById("nextBtn").style.display = "inline-block";
  } else {
    document.getElementById(
      "filteredQuoteSection"
    ).innerHTML = `<p>No quotes found for this author.</p>`;
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
  }
});

// Afficher une citation filtrée
function showFilteredQuote() {
  const q = filteredQuotes[filteredIndex];
  document.getElementById("filteredQuoteSection").innerHTML = `
    <p><strong>Quote #${q.id}</strong></p>
    <p>"${q.quote}"</p>
    <p><em>- ${q.author}</em></p>
    <p>Likes: ${q.likes}</p>
  `;
}

// Bouton précédent
document.getElementById("prevBtn").addEventListener("click", () => {
  if (filteredIndex > 0) {
    filteredIndex--;
    showFilteredQuote();
  }
});

// Bouton suivant
document.getElementById("nextBtn").addEventListener("click", () => {
  if (filteredIndex < filteredQuotes.length - 1) {
    filteredIndex++;
    showFilteredQuote();
  }
});
