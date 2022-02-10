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

    var sql = "SELECT SCHOOLS.teacher_id, teachers.name FROM SCHOOLS JOIN teachers ON SCHOOLS.teacher_id=teachers.id";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
  });