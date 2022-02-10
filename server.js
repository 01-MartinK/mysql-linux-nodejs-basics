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

    var sql = "INSERT INTO teachers (id,name,address) VALUES (4,'Kevin', 'Tallinn')";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("4. record inserted");
    });

    sql = "DELETE FROM teachers WHERE id = 2"

    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
    });

  });