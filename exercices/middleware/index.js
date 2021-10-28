const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = [];

function validateUser(req, res, next) {
  const { username, email, password } = req.body;
  
  const checkUser = /.{3,}/.test(username);
  const checkPass = /[0-9]{4,8}/.test(password);
  const checkEmail = /\w{5,}@[a-z]{5,8}.com/.test(email);

  let msg = {
    message: ''
  }

  if (checkUser)
    msg.message = 'User need 3 characters';
  else if (checkPass)
    msg.message = 'Password need numbers between 4 to 8';
  else if (checkEmail)
    msg.message = 'Enter a valid email address';

  res.status(400).send(msg);
  next();
}

app.post('/user/register', validateUser, ({ body }, res) => {
  users.push(body);
  res.status(201).send({ message: 'User created' });
});

app.post('/user/login', validateUser, (_req, res) => {
  res.status(200).send({ token: '86567349784e' })
});

app.listen(3001, () => {
  console.log('Porta aberta em http://localhost:3001/');
});
