const { Pool } = require("pg");

module.exports = new Pool({
  user: "",
  password: "9968",
  host: "localhost",
  port: 5432,
  database: "gymmanager",
});
