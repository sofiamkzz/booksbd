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
app.get('/', controller.renderHome);
app.get('/search?', controller.renderByTitle);
app.get('/search/:year', controller.renderByYear);

const PORT = process.env.PORT || 3000; // Usar a porta do ambiente ou padrão 3000
app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});