const { createPool } = require("mysql2");

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb",
    connectionLimit: 10
})

module.exports = pool