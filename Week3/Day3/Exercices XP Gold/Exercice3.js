function inverseCaracter(chain) {
  let result = "";
  for (let i = 0; i < chain.length; i++) {
    let char = chain[i];
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}
console.log(inverseCaracter("Hello , I'm a Chaine The Caracter "));
