const assert = require('assert');
const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let num = 1;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results.push(num);
      num += 1;
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowels, 'function');
assert.strictEqual(typeof parameter, 'string');
assert.strictEqual(removeVowels(parameter), result);

