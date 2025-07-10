const addTo = (x) => (y) => x + y;
const addToTen = addTo(10);
addToTen(3);
// addTo(10) returne une fonction qui ajoute 10 a son argumer
// addToTen =>est une fonction il returne 10 + y
//addToTen(3) => on appelle a la fonction addToTen avec 3 qui affiche 10+3=13
