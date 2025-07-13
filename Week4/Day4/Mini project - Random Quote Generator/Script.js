const quotes = [
  {
    id: 0,
    author: "Charles Lindbergh",
    quote:
      " Life is like a lzndsczpe. You live in the midst of it but can describe it only from the vantage point of distance.",
  },
  {
    id: 1,
    author: "Alan Kay",
    quote: "The best way to predict the future is to invent it.",
  },
  {
    id: 2,
    author: "Steve Jobs",
    quote: "Your time is limited, don't waste it living someone else's life.",
  },
];
function generateQuote() {
  const section = document.getElementById("Generate_section");
  const randomIndext = Math.floor(Math.random() * quotes.length);
  const quotObj = quotes[randomIndext];

  section.innerHTML = ` <p><strong>Quote #${quotObj.id}:</strong> "${quotObj.quote}"</p>
                      <p><em>- ${quotObj.author}</em></p>`;
}
function AjouteQuote(quoteObj) {
  const section = document.getElementById("Generate_section");

  const quoteDiv = document.createElement("div");
  quoteDiv.innerHTML = `
    <p><strong>Quote #${quoteObj.id}:</strong> "${quoteObj.quote}"</p>
    <p><em>- ${quoteObj.author}</em></p>
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
    };

    quotes.push(newQuote);

    //  Ajoute dans la section directement
    AjouteQuote(newQuote);

    document.getElementById("myform").reset();
  }
});
