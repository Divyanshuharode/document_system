const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    user: process.env.USER,
    host: process.env.HOST,
    port: process.env.DB_PORT,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

module.exports = pool;