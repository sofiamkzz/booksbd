//const books = require('./models');
const getAllBooks = require('./db');

// Rota para renderizar a página inicial
function renderHomePage(req, res) {

    getAllBooks((err, books) => {
        if (err) {
            // Handle error
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        res.render('index', { books });
    });
    
}

// Rota para exibir informações sobre um livro por ano a partir do parâmetro URL
function searchByYear(req, res) {
    try{
        getAllBooks((err, books) => {
            if (err) {
                // Handle error
                console.error(err);
                return res.status(500).send('Internal Server Error');
            }
            const byear = req.params.year;
            const booksByYear = books.filter(book => book.year == byear);
            res.render('index', { books: booksByYear }); 
        });
    } catch (error) {
        console.log(error)
    }
}

// Rota para pesquisar livros com base no título da string de consulta
function searchByTitle(req, res) {
    try{
        getAllBooks((err, books) => {
            if (err) {
                // Handle error
                console.error(err);
                return res.status(500).send('Internal Server Error');
            }
            const title = req.query.title || '';
            const booksByTitle = books.filter(book => book.title.toUpperCase().includes(title.toUpperCase())); 
            res.render('index', { books: booksByTitle });
        });
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = {
    renderHomePage,
    searchByYear,
    searchByTitle
};