const fs = require('fs');
const sinon = require('sinon');
const writeFile = require('./index');
const { expect } = require('chai');

const NUM = 100;
const NAME = 'my-file';
const CONT = 'Content File';

describe('writeFile', () => {

  beforeEach(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  afterEach(() => {
    fs.writeFileSync.restore();
  })

  describe('Escrevendo arquivo função com 2 parâmetros', () => {
    it('Com nome e conteúdo', () => {
      expect(writeFile(NAME, CONT)).to.be.equal('ok');
    });
  });

  describe('Escrevendo arquivo função com tipo inválido', () => {
    it('Com nome e número', () => {
      expect(writeFile(NAME, NUM)).to.be.equal('os dois parâmetros precisam ser do tipo "string"');
    });
  });

});

