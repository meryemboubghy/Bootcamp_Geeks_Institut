function anagramme(str1, str2) {
  // Convert both strings to lowercase and sort their characters
  const sortedStr1 = str1.toLowerCase().split("").sort().join("");
  const sortedStr2 = str2.toLowerCase().split("").sort().join("");

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}
console.log(anagramme("Astronomer", "Moon starer"));
console.log(anagramme("School master", "The classroom"));
console.log(anagramme("The Morse Code", "Here come dots"));
