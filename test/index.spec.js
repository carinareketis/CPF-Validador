const chai = require ("chai");
const expect = chai.expect;
const Index = require("../lib/index");

describe("index lib", () => {
    describe("cpfChecksInput", () => {
        it('cpf can not be empty', () => {
            expect(Index.cpfChecksInput('31832055809')).to.equal(true);
        });
});
});