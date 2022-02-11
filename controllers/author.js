const con = require('../utils/db');

const getAuthorWithArticles = (req, res) => {
    let query = `SELECT * FROM author WHERE id=${req.params.id}`;
    let author;
    let articles = [];
    con.query(query, (err, result) => {
        if (err) throw err;
        author = result;
        query = `SELECT * FROM article WHERE author_id=${req.params.id}`
        con.query(query, (err, result) => {
            if (err) throw err;
            articles = result;
            res.render('author', {
                author: author,
                articles: articles
            });
        });
    });
};

module.exports = {
    getAuthorWithArticles
};