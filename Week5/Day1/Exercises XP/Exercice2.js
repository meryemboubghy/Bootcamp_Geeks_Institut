const maPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success after 4 seconds");
  }, 4000);
});

maPromise.then((result) => console.log(result));
