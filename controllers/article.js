const con = require('../utils/db');

const getAllArticles = (req, res) => {
    let query = "SELECT * FROM article";
    let articles = [];
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result;
        res.render('index', {
           articles: articles 
        });
    });
};

const getArticleBySlug = (req, res) => {
    let query = `SELECT *, author.name as author_name, article.name as article_name FROM article JOIN author ON article.author_id=author.id WHERE slug="${req.params.slug}"`;
    let article;
    con.query(query, (err, result) => {
        if (err) throw err;
        article = result;
        console.log(article)
        res.render('article', {
            article: article
        });
    });
};

module.exports = {
    getAllArticles,
    getArticleBySlug
};