const sum = require('./sum');

const arr = [1, 2, 3];
const obj = {a: 1, b: 2, c:3};

test('sun two numbers', () => {
  expect(sum(5, 5)).toBe(10);
  expect(sum(10, 10)).toEqual(20);
  expect('numbers').toMatch(/^num/);
  expect(arr).toContain(3);
  expect(arr).toContainEqual(3);
  expect(arr).toHaveLength(3);
  expect(obj).toHaveProperty('c');
  expect(arr).not.toContain(5);
})
