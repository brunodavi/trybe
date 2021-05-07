const assert = require('assert');

function wordLengths(arr) {
  for (i in arr) {
    arr[i] = arr[i].length;
  }
  return arr
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);