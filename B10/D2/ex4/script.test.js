const { memeName, todoName, getRepos } = require('./script');

describe('Verificando se existem dois repositórios', () => {
  it(`Existe ${memeName} & ${todoName}`, async () => {
    expect.assertions(2);
    const repos = await getRepos();
    expect(repos).toContain(memeName);
    expect(repos).toContain(todoName);
  })
})