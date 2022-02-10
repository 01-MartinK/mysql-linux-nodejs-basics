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

    var sql = "INSERT INTO teachers (id,name,address) VALUES (2,'Carolin', 'Annelinn')";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("2. record inserted");
    });

    sql = "SELECT * FROM teachers where id=2"

    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
    });

  });