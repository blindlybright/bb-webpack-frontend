import { testType } from './test';

const chai = require("chai");
const expect = chai.expect; // or should, that are useful for sinon

// const sinon = require("sinon");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);



describe("#1: typescript test", function() {
    it("#1 should check testType work", function() {
        const result: string = testType('qwe');
        expect(result).to.be.equals('qwe plus testTyped');
    });
    it("#2 should check testType work", function() {
        const result = testType('qwe123');
        expect(result).to.be.equals('qwe123 plus testTyped');
    });
});
