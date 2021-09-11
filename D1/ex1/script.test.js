const { encode, decode } = require('./script.js');
const consonants = 'bcdfghjklmnpqrstvwxyz'

describe('Testando encode e decode', () => {
  it('1 - São Funções?', () => {
    expect('function').toBe(typeof encode);
    expect('function').toBe(typeof decode);
  })
  it('2 - Converte vogais por números?', () => {
    expect('12345').toBe(encode('aeiou'));
  })
  it('3 - Converte números por vogais?', () => {
    expect('aeiou').toBe(decode('12345'));
  })
  it('4 - Converte alguma consoante?', () => {
    expect(consonants).toBe(encode(consonants));
    expect(consonants).toBe(decode(consonants));
  })
  it('5 - Muda a quantidade de caracteres?', () => {
    expect(9).toBe(encode('converter').length);
    expect(9).toBe(decode('convrrter').length);
  })
})
