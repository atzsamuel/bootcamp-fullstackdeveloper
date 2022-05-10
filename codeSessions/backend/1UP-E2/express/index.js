const express = require("express");
const app = express();

//middleware
app.use((req, res, next) => {
  console.log("M1");
  res.send(`
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
  next();
});

app.use((req, res, next) => {
  console.log("M2");
});

app.listen(8500, () => {
  console.log("Server is running on port 8500");
});
