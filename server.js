let mysql = require('mysql');

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '778Iv23N'
});

connection.connect(function(err) {
    if (err) throw err;
  
    console.log('Connected!');

    connection.query("CREATE DATABASE oop_test", (err, result) => {
        if (err) throw err;
        console.log("Database created");
    });
  });