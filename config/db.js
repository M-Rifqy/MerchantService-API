var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234s4321',
    database: 'MiniProject'
});

module.exports = db;