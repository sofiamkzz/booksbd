const connection = require('./db');

// Função para renderizar a página inicial com os resultados
function getAllBooks(callback) {
    const sql = 'SELECT * FROM books';
    connection.query(sql, callback);
}

// Função para exibir informações sobre um livro por ano a partir do parâmetro URL
function searchByYear(year, callback) {
    if (year) {
        const sql = 'SELECT * FROM books WHERE year = ?';
        connection.query(sql, [year], callback);
    } else {
        callback(null, []);
    }
}

// Função para pesquisar livros com base no título da string de consulta
function searchByTitle(title, callback) {
    if (title) {
        title = title.trim();
        const sql = 'SELECT * FROM books WHERE UPPER(title) LIKE ?';
        connection.query(sql, [`%${title}%`], callback);
    } else {
        callback(null, []);
    }
}

module.exports = {
    getAllBooks,
    searchByYear,
    searchByTitle
};
