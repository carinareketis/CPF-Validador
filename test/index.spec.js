const chai = require('chai');
const expect = chai.expect;
const Index = require('../lib/index');
describe('index lib', () => {
  describe('cpfValidator', () => {
    it('cpf does not accept string', () => {
      expect(Index.cpfValidator('1a2b3c4d5e6')).to.equal(false);
    });
    it('cpf can not be empty', () => {
      expect(Index.cpfValidator('')).to.equal(false);
    });
    it('cpf characters less than < 11', () => {
      expect(Index.cpfValidator('12345')).to.equal(false);
    });
    it('cpf characters greater than > 11', () => {
      expect(Index.cpfValidator('123456789101112')).to.equal(false);
    });
    it('cpf characters equal', () => {
      expect(Index.cpfValidator('11111111111')).to.equal(false);
    });
  });
});