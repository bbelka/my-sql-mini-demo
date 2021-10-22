const mysql = require('mysql2');

//Connect to database
const db = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'password',
        database:'movies_db'
    },
    console.log('Connected to db')
);

module.exports = db;