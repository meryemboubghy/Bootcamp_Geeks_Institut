const resolvePromise = Promise.resolve(3);

//Afficher le résultat de la promesse résolue
resolvePromise.then((value) => {
  console.log("Resolu avec : ", value);
});

//Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const rejectPromise = Promise.reject("Boo!");
//Afficher le résultat de la promesse rejetée
rejectPromise.catch((error) => {
  console.log("Rejeté avec : ", error);
});
