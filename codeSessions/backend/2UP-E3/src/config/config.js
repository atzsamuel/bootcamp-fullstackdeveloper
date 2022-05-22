const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  server: {
    port: process.env.SERVER_PORT || 3000,
  },
  oracleConfig: {
    user: process.env.ORACLE_USER,
    password: process.env.ORACLE_PASSWORD,
    connectString: process.env.ORACLE_CONNSTR,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0,
  },
};

// pool for oracle is used to create connection for each request
