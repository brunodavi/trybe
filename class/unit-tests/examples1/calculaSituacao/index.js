const calculaSituacao = require('./funcs/calculaSituacao');
const readline = require('readline-sync');

function main() {
  const number = readline.questionInt('Qual a sua média na aula? ')
  const result = calculaSituacao(number);
  console.log(result);
}

main();

