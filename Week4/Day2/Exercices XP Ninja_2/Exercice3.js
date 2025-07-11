function search_word(chaine, mot) {
  const regex = new RegExp(`\\b${mot}\\b`, "gi");
  const correspondances = chaine.match(regex);
  const nombre = correspondances ? correspondances.length : 0;
  return `'${mot}' was found ${nombre} times.`;
}

console.log(search_word("The quick brown fox", "fox"));
