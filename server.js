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

    var sql = "DROP TABLE SCHOOLS";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log("Table dropped");
    });
  });