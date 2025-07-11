const array = [NaN, 0, 15, false, -22, "", undefined, 47, null];
const newArray = [];
function SupprimerArray() {
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
}
SupprimerArray();
console.log(newArray);
