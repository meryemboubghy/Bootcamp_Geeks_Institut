import { faker } from "@faker-js/faker";
import promptsync from "prompt-sync";

const prompt = promptsync();
const users = [];
export function AddUser() {
  const user = {
    name: faker.person.fullName(),
    address: {
      street: faker.location.street(),
      country: faker.location.country(),
    },
  };
  users.push(user);

  console.log("Fake user added :", user);
}
export function AddUserWithInput() {
  const name = prompt("Enter your name: ");
  const street = prompt("Enter your street: ");
  const country = prompt("Enter your country: ");
  users.push({
    name: name,
    address: {
      street: street,
      country: country,
    },
  });
  console.log("User added:", users);
}
AddUser();
AddUserWithInput();

console.log(" all Users:", users);
