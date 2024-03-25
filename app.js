const express = require('express');
const app = express();
const controller = require('./controller');

// Configurando EJS como view engine
app.set('view engine', 'ejs');

// Middleware para processar dados do formulário
app.use(express.urlencoded({ extended: true }));

// Middleware que serve os arquivos estáticos para o Express
app.use(express.static('public'));

// Rotas
app.get('/', controller.renderHomePage);

app.get('/search/:year', controller.searchByYear);
app.get('/search', controller.searchByTitle);

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});