const fs = require("fs");

//Fonction pour lire un fichier :
function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data;
  } catch (err) {
    console.error("Erreur lors de la lecture du fichier :", err);
  }
}

//fonction pour écrire dans un fichier :
function writeFile(filePath, Contenu) {
  try {
    fs.writeFileSync(filePath, Contenu, "utf8");
    console.log("Fichier écrit avec succès !");
  } catch (err) {
    console.error("Erreur lors de l'écriture dans le fichier :", err);
  }
}

module.exports = { readFile, writeFile };

// utiliser fs.readFileSync et fs.writeFileSync pour lire et écrire des fichiers de manière synchrone.
