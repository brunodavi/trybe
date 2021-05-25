const script = require('./script');

describe('Testando ran100', () => {
  it('Testando...', () => {
    script.ran100 = jest.fn().mockReturnValue(10);
    expect(script.ran100()).toBe(10);

    expect(script.ran100)
      .toHaveBeenCalledTimes(1);
  })
})
