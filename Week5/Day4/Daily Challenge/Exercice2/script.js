import promptSync from "prompt-sync";
import { getMinutes } from "./date.js";
const prompt = promptSync();
const dateNaissance = prompt("Entrez votre date de naissance (jj/mm/aaaa) : ");

const res = getMinutes(dateNaissance);
console.log(` Vous avez vécu environ ${res} minutes.`);
