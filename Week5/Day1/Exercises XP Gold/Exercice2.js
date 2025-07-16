function timesTwoAsync(x) {
  return new Promise((resolve) => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr).then((result) => {
  console.log(result);
});
// creer une tableau de promesses qui multiplie chaque élément du tableau par 2
// promiseArr [
//     Promise.resolve(2),
//     Promise.resolve(4),
//     Promise.resolve(6)
// ]
// Promise.all il retourne un tableau avec les resultata suivant
// [2, 4, 6]
