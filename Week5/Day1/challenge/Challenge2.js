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

// toJs(morse)
//   .then((result) => {
//     console.log("Morse object:", result);
//     return result;
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// 2. Convert user input to Morse array
function toMorse(morseObj) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or sentence:").toLowerCase();
    const morseArray = [];

    for (let char of userInput) {
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
document.getElementById("translate").addEventListener("click", () => {
  toJs(morse)
    .then(toMorse)
    .then(joinWords)
    .catch((error) => {
      document.getElementById("output").textContent = `Error: ${error}`;
    });
});
