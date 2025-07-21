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

let concurrentStart = async function () {
  console.log("==CONCURRENT START with await==");
  const slow = resolveAfter2Seconds();
  const fast = resolveAfter1Second();
  console.log(await slow);
  console.log(await fast);
};

setTimeout(concurrentStart, 4000);
// Output:
// ==CONCURRENT START with await==
// Etap 2 => Appelle resolveAfter2Seconds
// starting slow promise
// Etap 3 => Appelle resolveAfter1Second
// starting fast promise
// Attend 2 secondes... ensuite :
// Affiche "slow"
// Attend 1 seconde... ensuite :
// Affiche "fast"
// Note: The output will be different from the sequential version as both promises run concurrently.
