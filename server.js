let mysql = require('mysql');

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '778Iv23N',
    database : 'TEST',
});

connection.connect(function(err) {
    if (err) throw err;
  
    console.log('Connected to the MySQL server.');
  });