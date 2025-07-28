const { readFile, writeFile } = require("./fileManager");

// utilisation de la fonction readFile :
const readContent = readFile("Hello World.txt");
console.log("contenu du fichier est :", readContent);

// utilisation de la fonction writeFile :
const contentWrite = writeFile(
  "Bye World.txt",
  "Ecriture dans le fichier Bye World.txt"
);
const resultWrite = readFile("Bye World.txt", contentWrite);
console.log("contenu du fichier écrit :", resultWrite);
