// function mergeWords(mot) {
//   return function () {
//     return "Hello";
//   };
// }
// console.log(mergeWords("hello")());
// 2 :
function mergeWords(string) {
  return function (nextString) {
    if (nextString === undefined) {
      return string;
    } else {
      return mergeWords(string + " " + nextString);
    }
  };
}
console.log(mergeWords("There")("is")("no")("spoon.")());
//
const mergeWords = (string) => (nextString) =>
  nextString === undefined ? string : mergeWords(string + " " + nextString);
