const dotenv = require("dotenv");
const path = require("path");

if(!process.env.MYSQL_HOST) {
  dotenv.config({
    path: path.join(__dirname, "..", ".env")
  })
}

module.exports = {
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DB,
  dialect: "mysql"
}