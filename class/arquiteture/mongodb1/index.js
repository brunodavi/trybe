// index.js

const express = require('express');
const bodyParser = require("body-parser");
const Author = require("./models/Author");
const Book = require("./models/Book");
const User = require("./models/User");

const app = express();

app.use(bodyParser.json());

app.get("/authors", async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get("/authors/:id", async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: "Not found" });

  res.status(200).json(author);
});

app.post("/authors", async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: "Dados inválidos" });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: "Autor criado com sucesso! " });
});

app.get("/books", async (_req, res) => {
  const books = await Book.getAll();
  res.status(200).json(books);
});

app.get("/books/:id", async (req, res) => {
  const { id } = req.params;

  const book = await Book.getByAuthorId(id);

  if (!book) return res.status(404).json({ message: "Not found" });

  res.status(200).json(book);
});

app.post("/books", async (req, res) => {
  const { title, authorId } = req.body;
  const parsedInt = parseInt(authorId);

  if (!Book.isValid(title, parsedInt)) {
    return res.status(400).json({ message: "Dados inválidos" });
  }

  await Book.create(title, parsedInt);

  res.status(201).json({ message: "Livro criado com sucesso! " });
});

function regexValidator(data, conditions) {
  const index = conditions.findIndex(({ name, regex }) => {
    const value = data[name]
    return !value || !regex.test(value);
  });

  if (index === -1) return null
  return conditions[index].message
}

function validateUser(req, res, next) {
  const basicCondition = (name, count = 3) => (
    {
      name,
      regex: new RegExp(`^.{${count}}`),
      message: `O campo '${name}' deve conter ${count} caracteres ou mais`
    }
  )

  const conditions = [
    basicCondition('firstName'),
    basicCondition('lastName'),
    {
      name: 'email',
      regex: /^[\w_.]+@[a-z]{5,}\.com(\.br)?$/,
      message: 'O campo \'email\' deve ter esse padrão: email_example@gmail.com'
    },
    {
      name: 'password',
      regex: /^.{6,}/,
      message: 'O campo \'password\' deve ter pelo menos 6 caracteres'
    }
  ]

  const message = regexValidator(req.body, conditions);

  if (message) {
    return res.status(400).json({ message });
  }

  next()
}

app.get('/user', async (_req, res) => {
  const user = await User.getAll();
  if (!user.length) {
    return res.status(404).json({
      error: true,
      message: 'Usuário não encontrado'
    })
  }

  res.status(200).json(user);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({
      error: true,
      message: 'Usuário não encontrado',
    });
  }

  res.status(200).json(user);
});

app.post('/user', validateUser, async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password
  } = req.body;

  const userCreated = await User.create(firstName, lastName, email, password);
  res.status(201).json(userCreated);
});

app.put('/user/:id', validateUser, async (req, res) => {
  const { id } = req.params;
  const userUpdate = await User.update(id, req.body);

  if (!userUpdate) {
    return res.status(404).json({
      error: true,
      message: 'Usuário não encontrado',
    })
  }

  res.status(200).json(userUpdate);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
