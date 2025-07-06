function Palindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(Palindrome("madam"));
console.log(Palindrome("kayak"));
console.log(Palindrome("meryem"));
