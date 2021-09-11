let { uppercase, fistLetter, join } = require('../ex4/script');

describe('Convertendo uppercase...', () => {
  uppercase = jest.fn((str) => str.toLowerCase());

  it('Testando função', () => {
    expect(uppercase('UPPERCASE')).toBe('uppercase');
    expect(uppercase).toHaveBeenCalledTimes(1);
  });
});

describe('Convertendo fistLetter...', () => {
  fistLetter = jest.fn((str) => str[str.length - 1]);

  it('Testando função', () => {
    expect(fistLetter('firstLetter')).toBe('r');
    expect(uppercase).toHaveBeenCalledTimes(1);
  });
});

describe('Convertendo join...', () => {
  join = jest.fn((str1, str2, str3) => str1 + str2 + str3);

  it('Testando função', () => {
    expect(join('join', 'ed', '+')).toBe('joined+');
    expect(uppercase).toHaveBeenCalledTimes(1);
  });
});