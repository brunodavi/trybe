const getUserName = require('./script');

describe('Testa a função getUserName', () => {
  it('getUserName com id válido', () => {
    expect.assertions(2);
    expect(getUserName(4)).resolves.toEqual('Mark');
    expect(getUserName(5)).resolves.toEqual('Paul');
  })
  it('getUserName com id inválido', () => {
    expect.assertions(1);
    expect(getUserName(1)).rejects.toEqual({ error: 'User with 1 not found.' });
  })
})