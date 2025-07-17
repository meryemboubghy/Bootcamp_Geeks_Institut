const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "foo");
});

// Utilisation de Promise.all
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("Succès:", results);
  })
  .catch((error) => {
    console.error("Échec:", error);
  });
