const uppercase = require('./script');

describe('Testando a função uppercase', () => {
  it('Testando se converte minusculas para maiúsculas', done => {
    uppercase('upper', result => {
      expect(result).toBe('UPPER');
      done();
    })
  })
})
