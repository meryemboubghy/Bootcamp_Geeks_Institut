function capitalize(str) {
  let pair = "";
  let impair = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      pair += str[i].toUpperCase();
      impair += str[i];
    } else {
      pair += str[i];
      impair += str[i].toUpperCase();
    }
  }
  return [pair, impair];
}
console.log(capitalize("abcdef"));
console.log(capitalize("meryem"));
