
const express = require('express');
const app = express();

const path = require('path');

const mysql = require('mysql');

const hbs = require('express-handlebars');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname+'/views/layouts/'
}));

app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '778Iv23N',
    database: "yoga_mysql"
});

con.connect(function(err) {
    if (err) throw err;
  
    console.log('Connected to yoga_mysql db');
});

const articleRoutes = require('./routers/article');

app.use('/', articleRoutes);
app.use('/article', articleRoutes);

app.get('/author/:id', (req, res) => {
    let query = `SELECT * FROM author WHERE id=${req.params.id}`;
    let author;
    let articles = [];
    con.query(query, (err, result) => {
        if (err) throw err;
        author = result;
        console.log(author)
        query = `SELECT * FROM article WHERE author_id=${req.params.id}`
        con.query(query, (err, result) => {
            if (err) throw err;
            article = result;
             console.log(article)
            res.render('author', {
                author: author,
                articles: article
            });
        });
    });
});

app.listen(3000, () => {
    console.log('App started at localhost:3000')
});