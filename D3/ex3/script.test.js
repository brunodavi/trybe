const script = require('../ex1/script');

describe('Testando ran100', () => {
  it('Testando...', () => {
    script.ran100 = jest.fn().mockReturnValue(10);
    expect(script.ran100()).toBe(10);

    expect(script.ran100)
      .toHaveBeenCalledTimes(1);
  })
})

describe('Convertendo ran100', () => {
  it('Converção...', () => {
    script.ran100 = jest.fn((a, b) => a / b);
    expect(script.ran100(10, 2)).toBe(5);
    expect(script.ran100(9, 3)).toBe(3);
  })
})

describe('', () => {
  it('', () => {
    script.ran100 = jest.fn((a, b, c) => a * b * c);
    expect(script.ran100(1, 1, 5)).toBe(5);
    expect(script.ran100(1, 2, 3)).toBe(6);
    script.ran100.mockRestore();
    expect(script.ran100()).toBeUndefined();
  })
})
