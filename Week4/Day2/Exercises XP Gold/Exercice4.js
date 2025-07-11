const array = [[1], [2], [3], [[[4]]], [[[5]]]];
// 1 :
const result = array.flat(2);
console.log(result);
// 2 :
const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
];
const greet = greeting.map((arr) => arr.join(" "));
console.log(greet);
// 3 :
const phrase = greeting.map((arr) => arr.join(" ")).join(" ");
console.log(phrase);
// 4 :
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const res = trapped.flat(Infinity);
console.log(res);
