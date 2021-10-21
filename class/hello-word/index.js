console.log('Hello, world!');
const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Olá, ${name}! Você está com ${age} de idade`);
