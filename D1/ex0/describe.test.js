const int = 12345;
const str = '12345';
const obj = {a:1,b:2,c:3}
const arr = [1, 2, 3, 4, 5];

describe('Teste 1', () => {
  it('Verificando números', () => {
    expect(int).toBe(12345);
  })
})

describe('Test 2', () => {
  it('Buscar um 5 na string', () => {
    expect(str).toMatch(/5/);
  })
  it('Não tem 0 no inicio', () => {
    expect(str).not.toMatch(/^0/);
  })
})
