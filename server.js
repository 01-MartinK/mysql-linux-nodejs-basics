
const express = require('express');
const app = express();

const path = require('path');

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

const articleRoutes = require('./routers/article');
const authorRoutes = require('./routers/author');

app.use('/', articleRoutes);
app.use('/article', articleRoutes);
app.use('/author', authorRoutes);

app.listen(3000, () => {
    console.log('App started at localhost:3000')
});