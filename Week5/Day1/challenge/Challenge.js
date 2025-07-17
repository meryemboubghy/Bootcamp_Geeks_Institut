function makeAllCaps(array) {
  return new Promise((resolve, reject) => {
    if (
      Array.isArray(array) &&
      array.every((item) => typeof item === "string")
    ) {
      const allCaps = array.map((item) => item.toUpperCase());
      resolve(allCaps);
    } else {
      reject(new Error("Input must be an array of strings"));
    }
  });
}

function sortWords(array) {
  return new Promise((resolve, reject) => {
    if (
      Array.isArray(array) &&
      array.every((item) => typeof item === "string")
    ) {
      resolve(array.sort());
    } else {
      reject(new Error("Cannot sort: not all items are strings"));
    }
  });
}

makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log("Erreur :", error.message));

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, you should see in the console,
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch((error) => console.log(error));

// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

function sortWords(Array) {
  return new Promise((resolve, reject) => {
    // console.log("Array :", Array.length);
    if (Array.length > 4) {
      resolve(Array.sort());
    } else {
      reject(new Error("Array length must be greater than 4"));
    }
  });
}
sortWords(["avocado", "cucumber", "tomato", "banana", "apple"])
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

sortWords(["avocado", "cucumber", "tomatos"])
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

// 2nd daily challenge
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs(morseJson) {
  return new Promise((resolve, reject) => {
    try {
      const morsObject = JSON.parse(morseJson);
      if (Object.keys(morsObject).length === 0) {
        reject("Morse object is empty");
      } else {
        resolve(morsObject);
      }
    } catch (error) {
      reject("Invalid JSON String");
    }
  });
}

toJs(morse)
  .then((result) => {
    console.log("Morse object:", result);
    return result;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// 3 :
function toMorse(morseObj) {
  return new Promise((resolve, reject) => {
    const chars = input.toLowerCase().split("");
    const morseArray = [];

    for (let char of chars) {
      if (morseObj[char]) {
        morseArray.push(morseObj[char]);
      } else {
        reject(`Character "${char}" not in Morse object`);
        return;
      }
    }

    resolve(morseArray);
  });
}
function joinWords(morseTranslation) {
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = morseTranslation.join("\n");
}
