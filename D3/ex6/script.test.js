let dogApi = require('./script');

describe('Testando api...', () => {
  it('Resolve', async () => {
    dogApi = jest.fn().mockResolvedValue('request success');
    expect(dogApi()).resolves.toMatch('request success');
  });
  it('Reject', async () => {
    dogApi = jest.fn().mockResolvedValue('request failed');
    expect(dogApi()).rejects.toMatch('request failed');
  });
});
