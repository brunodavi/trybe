const { expect } = require('chai');
const posneg = require('./index.js');

const STR = 'string'
const POS = 1
const NEG = -1
const NEU = 0

describe("Verificando se a função retorna 'positivo'", () => {
  it("Se é 1", () => {
    expect(posneg(POS)).to.be.equal('positivo');
  });
});

describe("Verificando se a função retorna 'negativo'", () => {
  it("Se é -1", () => {
    expect(posneg(NEG)).to.be.equal('negativo');
  });
});

describe("Verificando se a função retorna 'neutro'", () => {
  it("Se é 0", () => {
    expect(posneg(NEU)).to.be.equal('neutro');
  });
});

describe("Verificando se a função retorna 'o valor deve ser um número'", () => {
  it("Se é 'string'", () => {
    expect(posneg(STR)).to.be.equal('o valor deve ser um número');
  });
});
