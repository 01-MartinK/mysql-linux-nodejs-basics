const express = require('express');
const app = express();

const path = require('path');

const mysql = require('mysql');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '778Iv23N',
    database: "oop_test"
});

con.connect(function(err) {
    if (err) throw err;
  
    console.log('Connected to yoga_mysql db');
});

app.listen(3000, () => {
    console.log('App started at localhost:3000')
});