const userModel = require('./models');

// Rota para renderizar a página inicial com os resultados
function renderHome(req, res) {
    userModel.getAllBooks((err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        res.render('index', { books: results, error: null });
    });
}

// Rota para exibir informações sobre um livro por ano a partir do parâmetro URL
function renderByYear(req, res) {
    const byear = req.params.year;
    userModel.searchByYear(byear, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        if (results.length === 0) {
            return res.render('index', { books: [], error: 'No books found.' });
        }

        res.render('index', { books: results, error: null, });
    });
}  

// Rota para pesquisar livros com base no título da string de consulta
function renderByTitle(req, res) {
    const title = req.query.title;
    userModel.searchByTitle(title, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        if (title) {
            res.render('index', { books: results, error: null });
        } else {
             return res.render('index', { books: [], error: 'No books found.' });
        }
    });
}

module.exports = {
    renderHome,
    renderByYear,
    renderByTitle
};