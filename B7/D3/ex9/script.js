const assert = require('assert');

function sumAllNumbers(arr) {
  let n = 0
  for (val of arr) {
    n += val
  }
  return n
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);