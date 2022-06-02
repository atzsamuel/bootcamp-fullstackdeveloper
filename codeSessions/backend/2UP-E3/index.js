const express = require("express");

const { server } = require("./src/config/config");
const oracle = require("./src/utils/oracle");
const app = express();
const cors = require("cors");
const cookies = require("cookie-parser");
const guard = require("./src/guard/guard");

const personRoutes = require("./src/routes/person");
const categoryRoutes = require("./src/routes/category"); //Importing route
const invalidRoutes = require("./src/routes/404"); //Importing route

//app.use('/catalog',categoryRoutes);
app.use(cors({ origin: true, credentials: true }));
app.use(cookies());
app.use(express.json());

app.use(personRoutes);
app.use(categoryRoutes); //Registering route
app.use(invalidRoutes); //Registering route

oracle
  .start()
  .then(() => {
    console.log("Oracle database connected!");
    app.listen(server.port, () => {
      console.log(`Server running on port ${server.port}`);
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

app.listen(server.port, () => {
  console.log(`server is running on port:${server.port}`);
});
