/* Http */
const http = require("http");
const fs = require("fs");
const path = require("path");

const showMainPage = (res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`
  <html>
  <head>
  <title>Hello</title>
  <style>h1{color:blue} body{background-color:black}</style>
  </head>
  <body>
  <h1>Core Code</h1>
  <form action="send_message" method="POST">
  <input type="text" name="message" placeholder="Enter Message">
  <button type="submit">Send</button>
  </form>
  </body>
  </html>
  `);
  res.end();
};

const pageNotFound = (res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`
  <html>
  <head>
  <title>Not Found</title>
  <style>h1{color:yellow} body{background-color:black}</style>
  </head>
  <body>
  <h1>The page you are looking for is not here</h1>
  </body>
  </html>
  `);
  res.end();
};

const logInteraction = (req) => {
  const logPath = path.join(".", path.sep, "files", "log.txt");
  // place to store chunks of data
  const reqBody = [];


  const userInput = req.msg;
  fs.writeFileSync(logPath, `${new Date()}-${userInput}\n`, { flag: "a" });
};

const requestHandler = (req, res) => {
  const { url, method } = req;
  if (url === "/") {
    showMainPage(res);
  } else if (url === "/send_message" && method === "POST") {
    logInteraction(res);
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
  return pageNotFound(res);
};

const server = http.createServer(requestHandler);
server.listen(8500);
