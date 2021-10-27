const express = require('express');
const bodyParser = require('body-parser');
const recipesRouter = require('./recipesRouter');

const app = express();
app.use(bodyParser.json());

app.use(function logErrors(err, _req, _res, next) {
  console.error(err.stack);
  next(err);
});

app.use(function (err, _req, res, _next) {
  res.status(500);
  res.json({ error: err });
});

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (_req, res) {
  res.send('open!')
});

/* Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/recipes', recipesRouter);

app.all('*', function (req, res) {
 return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });
