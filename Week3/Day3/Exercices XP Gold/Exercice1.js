function is_Blank(valeur) {
  return valeur === undefined || valeur === null || valeur.trim() === "";
}

// Appel Methode :
console.log(is_Blank(""));
console.log(is_Blank("   "));
console.log(is_Blank(null));
console.log(is_Blank(undefined));
console.log(is_Blank("Hello"));
