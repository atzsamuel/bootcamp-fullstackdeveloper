/* Filse System */
const fs = require("fs");
const path = require("path");

const loremPath = path.join(".", path.sep, "files", "lorem.txt");

// for small files
const result = fs.readFileSync(loremPath, "utf-8");
fs.writeFileSync(loremPath, "- Hello from Node", { flag: "a" });
console.log(result);
console.log('Finish reading file');
