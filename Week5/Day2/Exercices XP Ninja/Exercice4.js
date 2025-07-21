let resolveAfter2Seconds = function () {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
};

let resolveAfter1Second = function () {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
};

// This function does not handle errors. See warning below!
let parallelPromise = function () {
  console.log("==PARALLEL with Promise.then==");
  resolveAfter2Seconds().then((message) => console.log(message));
  resolveAfter1Second().then((message) => console.log(message));
};

setTimeout(parallelPromise, 13000);
// Output:
// APrès 13 secondes, on lance la fonction parallelPromise
// Etap 2 => Appelle resolveAfter2Seconds
// ==PARALLEL with Promise.then==
// starting slow promise
// starting fast promise
// Attend 2 secondes... ensuite :
// Affiche "slow"
// Attend 1 seconde... ensuite :
// Affiche "fast"
