const express = require("express");

const { server } = require("./src/config/config");
const app = express();

const categoryRoutes = require("./src/routes/category"); //Importing route
const invalidRoutes = require("./src/routes/404"); //Importing route

//app.use('/catalog',categoryRoutes);
app.use(categoryRoutes); //Registering route
app.use(invalidRoutes); //Registering route

app.listen(server.port, () => {
  console.log(`server is running on port:${server.port}`);
});
