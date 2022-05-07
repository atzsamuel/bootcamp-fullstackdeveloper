/* Filse System */
const fs = require("fs");
const path = require("path");

const loremPath = path.join(".", path.sep, "files", "lorem.txt");

// for big files
fs.readFile(loremPath, "utf-8", (error, data) => {
  if (error) console.log(`Error: ${error}`);
  console.log(data);
});

console.log("Finish reading file");

// For small files
fs.writeFileSync(loremPath, "- Hello from Node", { flag: "a" }, (error) => {
  if (error) console.log(`Error: ${error}`);
  console.log("Async writing Finish writing file");
});
