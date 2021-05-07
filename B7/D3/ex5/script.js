// 4 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível 
// por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas
// por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num
// não seja um número

//   4.1 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
//   4.2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
//   4.3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
//   4.4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
//   4.5 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.strictEqual(myFizzBuzz(3), 'fizz');
assert.strictEqual(myFizzBuzz(5), 'buzz');
assert.notStrictEqual(myFizzBuzz(1), 'fizzbuzz');
assert.ok(myFizzBuzz('0') === false);
