import chalk from "chalk";

export function coloreMessage(message) {
  return chalk.bgGreen.black.italic.bold(message);
}
// console.log(coloreMessage("Exercices XP Ninja Week 5 Day 4"));
