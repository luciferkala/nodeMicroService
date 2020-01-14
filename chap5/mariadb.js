const mysql = require("mysql");
const conn = {
  host: "localhost",
  user: "root",
  password: "didwjdgns1",
  database: "monolithic"
};

var connection = mysql.createConnection(conn);
connection.connect();
connection.query("query", (error, results, fields) => {});
connection.end();
