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

    /*
    var sql = "CREATE TABLE SCHOOLS(id int, name VARCHAR(128), teacher_id int)";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Created another Table");
    });
    */

    sql = "INSERT INTO SCHOOLS(id,name,teacher_id) VALUES (1,'elva gümnaasium','3')"
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Inserted value");
    });
    sql = "INSERT INTO SCHOOLS(id,name,teacher_id) VALUES (2,'tallinna polütehnika','4')"
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Inserted value");
    });
    sql = "INSERT INTO SCHOOLS(id,name,teacher_id) VALUES (3,'tartu vocational educational college','1')"
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Inserted value");
    });
  });