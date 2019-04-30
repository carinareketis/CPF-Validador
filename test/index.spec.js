const chai = require ("chai");
const expect = chai.expect;
const Index = require("../lib/index");

describe("index lib", () => {
    describe("cpfChecksInput", () => {
        it('cpf can not be empty', () => {
            expect(Index.cpfChecksInput('')).to.equal(false);
        });
        it('cpf characters less than < 11', () => {
            expect(Index.cpfChecksInput('12345')).to.equal(false);
        });
        it('cpf characters greater than > 11', () => {
            expect(Index.cpfChecksInput('123456789101112')).to.equal(false);
        });
        it('cpf characters equal', () => {
            expect(Index.cpfChecksInput('11111111111')).to.equal(false);
        });
    });
});