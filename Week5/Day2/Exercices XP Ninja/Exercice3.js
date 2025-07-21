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

let parallel = async function () {
  console.log("==PARALLEL with await Promise.all==");
  // Start 2 "jobs" in parallel and wait for both of them to complete
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
};

setTimeout(parallel, 5000);
// Output:
// ==PARALLEL with await Promise.all==
// Etap 2 => Appelle resolveAfter2Seconds
// afficher starting slow promise
// Etap 3 => Appelle resolveAfter1Second
// afficher starting fast promise
// Attend 2 secondes... ensuite :
// Affiche "slow"
// Attend 1 seconde... ensuite :
// Affiche "fast"
