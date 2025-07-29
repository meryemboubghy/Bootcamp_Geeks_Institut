const fs = require("fs");
const path = require("path");

function afficheInfo() {
  const filePath = path.join(__dirname, "data", "example.txt");
  console.log("File Path:", filePath);

  //check if the file exists
  if (fs.existsSync(filePath)) {
    console.log("File exists.");

    // get file information

    const stats = fs.statSync(filePath);
    console.log("File Information:");
    console.log("Size:", stats.size, "bytes");
    console.log("Created At:", stats.birthtime);
    console.log("Last Modified At:", stats.mtime);
  } else {
    console.log("File does not exist.");
  }
}
module.exports = afficheInfo;
