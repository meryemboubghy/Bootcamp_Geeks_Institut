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

let sequentialStart = async function () {
  console.log("==SEQUENTIAL START==");
  const slow = await resolveAfter2Seconds();
  console.log(slow);
  const fast = await resolveAfter1Second();
  console.log(fast);
};

sequentialStart();
// Output:
// ==SEQUENTIAL START==
// Etap 2 => Appelle resolveAfter2Seconds
// starting slow promise
//Attend 2 secondes... ensuite :
// Affiche "slow"
// Etap 3 => Appelle resolveAfter1Second
// afficher starting fast promise
// Attend 1 seconde... ensuite :
// Affiche "fast"
