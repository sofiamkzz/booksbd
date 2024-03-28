const mysql = require('mysql2');

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'monorail.proxy.rlwy.net',
    port: 50855,
    user: 'root',
    password: 'ssMpmeRsNLJbcRZNfpCGpANFTjoExabT',
    database: 'railway'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId);
});

module.exports = connection;