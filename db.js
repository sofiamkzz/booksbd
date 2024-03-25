// db.js
const mysql = require('mysql2');

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'library'
});
// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId);
});

// Query the database to retrieve books
function getAllBooks(callback) {
connection.query('SELECT * FROM books', (error, results, fields) => {
    if (error) {
      console.log('Error fetching books:', error);
      return;
    }
  
    // Filter the books based on some criteria (e.g., publication year)
    const books = results;
    
    console.log(books);
    callback(null, books)
    return books;
  
    // Don't forget to close the connection when done
    connection.end();
});
console.log("404");
}

module.exports = getAllBooks
