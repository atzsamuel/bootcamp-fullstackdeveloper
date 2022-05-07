/* Path */
const path = require("path");

// separator
console.log(path.sep);

// join path
const loremPath = path.join(path.sep, "files", "ipsum.txt");
console.log(loremPath);

// basename, dirname, extname
console.log(path.basename(loremPath));


// relative path: ./files/ipsum.txt
//absolute path: C:/users/.../files/ipsum.txt

//resolve
const absolutePath = path.resolve(__dirname, "files", "ipsum.txt");
console.log(absolutePath);