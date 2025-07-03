const famille = {
  père: "Lhabibe",
  mère: "Fatima",
  frère: "Hamid",
  sœur: "meryem",
};
// Afficher les clés

for (let cle in famille) {
  console.log(cle);
}
// Afficher les valeurs
for (let cle in famille) {
  console.log(famille[cle]);
}
