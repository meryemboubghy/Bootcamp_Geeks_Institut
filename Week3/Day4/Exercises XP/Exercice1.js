// 1:
const h1 = document.querySelector("h1");
console.log(h1);
// 2 : supprimez le dernier paragraphe de la <article>balise.
const article = document.querySelector("article");
const paragraphs = article.querySelectorAll("p");

const lastPara = paragraphs[paragraphs.length - 1];
lastPara.remove();
// 3 :changera la couleur d'arrière-plan h2 en rouge, lorsqu'il sera cliqué.
// Selectioner le h2 .
const h2 = document.querySelector("h2");
h2.addEventListener("click", function () {
  h2.style.backgroundColor = "red";
});
// 4 :
const h3 = document.querySelector("h3");
h3.addEventListener("click", () => (h3.style.display = "none"));
// 5 :
const text = document.getElementById("txt");
text.addEventListener("click", function () {
  const para = document.querySelectorAll("p");
  para.forEach((p) => {
    p.style.fontWeight = "bold";
  });
});
// 6 : BOUNUS .
const title = document.querySelector("h1");
title.addEventListener("mouseenter", function () {
  const random = Math.floor(Math.random() * 101);
  title.style.fontSize = random + "px";
});
// 7 : BOUNUS .
const p2 = document.getElementById("fade");
p2.addEventListener("mouseover", function () {
  p2.style.transition = "opacity 1s ease-out";
  p2.style.opacity = "0";
});
