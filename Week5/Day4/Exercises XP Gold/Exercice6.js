import promptsync from "prompt-sync";
const prompt = promptsync();

const nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

let fullName;
do {
  fullName = prompt("Enter your full name (« John Doe »): ");
  if (!nameRegex.test(fullName)) {
    console.log(
      "Your name is invalid. Please enter in the format « John Doe »)."
    );
  }
} while (!nameRegex.test(fullName));

console.log("Your name is valid.");

console.log("Thank you for providing a valid name.", fullName);
