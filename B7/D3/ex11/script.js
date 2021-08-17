const assert = require('assert');
const greetPeople = (people) => {
  let greeting = [];

  for (i in people) {
    greeting[i] = `Hello ${people[i]}`;
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof greetPeople, 'function');
assert.strictEqual(typeof parameter, 'object');

assert.deepStrictEqual(greetPeople(parameter), result);
