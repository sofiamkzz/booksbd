const connection = require('./db');

// Rota para renderizar a página inicial com os resultados
function getAllBooks(callback) {
    const sql = 'SELECT * FROM books';
    connection.query(sql, callback);
}

// Rota para exibir informações sobre um livro por ano a partir do parâmetro URL
function searchByYear(year, callback) {
    if (year !== undefined || year !== null || !year) {
        const sql = 'SELECT * FROM books WHERE year = ?';
        connection.query(sql, [year], callback);
    } else {
        callback(null, []);
    }
}

// Rota para pesquisar livros com base no título da string de consulta
function searchByTitle(title, callback) {
    if (title && title.trim() !== '') {
        const sql = 'SELECT * FROM books WHERE UPPER(title) LIKE ?';
        connection.query(sql, [`%${title.toUpperCase()}%`], callback);
    } else {
        callback(null, []);
    }
}

module.exports = {
    getAllBooks,
    searchByYear,
    searchByTitle
};