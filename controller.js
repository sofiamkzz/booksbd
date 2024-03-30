const bookModel = require('./models');

// Função para renderizar a página inicial com os resultados
function renderHome(req, res) {
    bookModel.getAllBooks((err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        res.render('index', { books: results, error: null });
    });
}

// Função para exibir informações sobre um livro por ano a partir do parâmetro URL
function renderByYear(req, res) {
    const byear = req.params.year;
    bookModel.searchByYear(byear, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        res.render('index', { books: results, error: null, });
    });
}  

// Função para pesquisar livros com base no título da string de consulta
function renderByTitle(req, res) {
    const title = req.query.title;
    bookModel.searchByTitle(title, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        res.render('index', { books: results, error: null });
    });
}

module.exports = {
    renderHome,
    renderByYear,
    renderByTitle
};
