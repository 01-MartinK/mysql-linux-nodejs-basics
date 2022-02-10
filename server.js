let mysql = require('mysql');

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '778Iv23N',
    database: "oop_test"
});

connection.connect(function(err) {
    if (err) throw err;
  
    console.log('Connected!');

    var sql = "CREATE TABLE teachers (id int, name VARCHAR(32), address VARCHAR(120))";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Table created");
    });
  });