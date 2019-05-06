const chai = require ("chai");
const expect = chai.expect;
const Index = require("../lib/index");
describe('index lib', () => {
  describe('cpfValidator', () => {
    it('cpf does not accept string', () => {
      expect(Index.cpfValidator('ascderfgthy')).to.equal(false);
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
      expect(Index.cpfValidator('00000000000')).to.equal(false);
    });
    it('cpf characters completed', () => {
      expect(Index.cpfValidator('89010582000')).to.equal(true);
    });
    it('cpf invalid', () => {
      expect(Index.cpfValidator('72124842456')).to.equal(false);
    });
    it('cpf valid', () => {
      expect(Index.cpfValidator('19842416054')).to.equal(true);
    });
  });
});