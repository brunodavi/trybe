const assert = require('assert');

function div(x, y) {
  if (y === 0) throw new Error('y não pode ser dividido por 0')
  return x / y
}

assert.ok(div(2, 2) === 1);
assert.strictEqual(typeof div, 'function');
assert.strictEqual(div(9, 3), 3, '3 === 3');
assert.notStrictEqual(div(90, 3), 3, '3 !== 3');
assert.throws(() => div(12, 0), 'Se y for 0 tem que mostrar uma mensagem de erro');
