const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const simpsons = JSON.parse(
  fs.readFileSync('./simpsons.json').toString()
);

const api = express();

api.use(bodyParser.json());

api.get('/ping', (_req, res) => {
  res.send({ message: 'pong' });
});

api.post('/hello', (req, res) => {
  const { name } = req.body;
  res.send({ message: `Hello, ${name}!` });
});

api.post('/greetings/:name/:age', (req, res) => {
  const { name, age } = req.params;
  if (age > 17) {
    res.status(200).send({ message: `Hello, ${name}!` });
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
});

api.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.send({ message: `Seu nome é ${name} e você tem ${age} anos` });
})

api.get('/simpsons', (_req, res) => {
  res.status(200).send(simpsons);
});

api.post('/simpsons', (req, res) => {
  const { id, name } = req.body;

  if (simpsons.some((p) => p.id === id)) {
    res.status(409).send({ message: 'id already exists' });
  } else {

    const json = JSON.stringify([
      ...simpsons,
      { id, name },
    ]);

    fs.writeFileSync('./simpsons.json', json);
    res.status(204).end();
  }
});

api.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  const person = simpsons.find((r) => r.id === id);
  if (person) {
    res.status(200).send(person);
  } else {
    res.status(404).send({ message: 'id not found!' });
  }
});


api.listen(3001, () => {
  console.log('Escutando na porta 3001');
})
