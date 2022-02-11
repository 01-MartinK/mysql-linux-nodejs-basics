const express = require('express');
const app = express();

const path = require('path');

const mysql = require('mysql');

const hbs = require('express-handlebars');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', hbs.engine);
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname+'/views/layouts/',
}));

app.use(express.static('public'));

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