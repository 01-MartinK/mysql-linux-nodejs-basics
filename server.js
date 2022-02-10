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

    var sql = "INSERT INTO teachers (id,name,address) VALUES (1,'Anna Karutina', 'Tartu vocational educational college')";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("1 records inserted");
    });

    sql = "SELECT * FROM teachers"

    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
    });

  });