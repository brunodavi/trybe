let { uppercase, fistLetter, join } = require('./script');

describe('Convertendo uppercase...', () => {
  uppercase = jest.fn((str) => str.toLowerCase());

  it('Testando função', () => {
    expect(uppercase('UPPERCASE')).toBe('uppercase');
  });
});

describe('Convertendo fistLetter...', () => {
  fistLetter = jest.fn((str) => str[str.length - 1]);

  it('Testando função', () => {
    expect(fistLetter('firstLetter')).toBe('r');
  });
});

describe('Convertendo join...', () => {
  join = jest.fn((str1, str2, str3) => str1 + str2 + str3);

  it('Testando função', () => {
    expect(join('join', 'ed', '+')).toBe('joined+');
  });
});
