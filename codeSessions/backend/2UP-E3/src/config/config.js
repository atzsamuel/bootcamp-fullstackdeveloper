const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  server: {
    port: process.SERVER_PORT || 3000,
  },
};
