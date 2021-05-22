const getUserName = require('../ex2/script');

describe('Testa a função getUserName', () => {
  it('getUserName com id válido', async () => {
    const id4 = await getUserName(4);
    const id5 = await getUserName(5);
    expect(id4).toEqual('Mark');
    expect(id5).toEqual('Paul');
  });
  it('getUserName com id inválido', async () => {
    try {
      await getUserName(1);
    } catch (error) {
      await expect(error).toEqual({ error: 'User with 1 not found.' });
    }
  });
})