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

    var sql = "INSERT INTO teachers (id,name,address) VALUES (3,'Uncle', 'Tallinn')";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("3. record inserted");
    });

    sql = "SELECT * FROM teachers ORDER BY id DESC"

    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
    });

  });