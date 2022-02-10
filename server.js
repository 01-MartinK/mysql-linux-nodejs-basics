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

    var sql = "UPDATE teachers SET address = 'Elva' WHERE id='1'";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("updated value");
        console.log(result)
    });
  });