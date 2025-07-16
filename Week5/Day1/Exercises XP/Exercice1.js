function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("le nombre est superieur à 10");
    } else {
      reject("le nombre est inferieur ou egal à 10");
    }
  });
}

//In the example, the promise should reject
compareToTen(15)
  .then((result) => {
    console.log("Succes :", result);
  })
  .catch((error) => console.log("Erreur :", error));
//In the example, the promise should resolve
compareToTen(8)
  .then((result) => console.log("Succès :", result))
  .catch((error) => console.log("Erreur :", error));
