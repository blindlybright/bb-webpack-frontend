// import { describe, it } from 'mocha';
// ^ is imported internally by karma (with mocha framework functions)

const chai = require("chai");
const expect = chai.expect; // or should, that is useful for sinon

import { add, mul, div } from "./fn";

describe("Demo describe 'add'", () => {
    it("should add correctly (1 + 2 == 3)", (done) => {
        expect(add(1, 2)).to.be.equals(3);
        done();
    });
});

describe("Demo describe 'mul'", () => {
    it("should mul correctly (2 * 3 == 6)", () => {
        expect(mul(2, 3)).to.be.equals(6);
    });
    it("should mul correctly (2 * 4 == 8)", () => {
        expect(mul(2, 4)).to.be.equals(8);
    });
});

// note: let this here be hidden for coverage map not to be full here
// describe("Demo describe 'div'", () => {
//     it("should div correctly", () => {
//         assert.strictEqual(div(2, 2), 2);
//     });
// });
