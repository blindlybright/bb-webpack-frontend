// import { describe, it } from 'mocha';
// ^ is imported internally by karma (with mocha framework functions)

const assert = require("assert");

import { add, mul, div } from "./fn";

describe("Demo describe 'add'", () => {
    it("should add correctly", (done) => {
        assert.strictEqual(add(1, 2), 3);
        done();
    });
});

describe("Demo describe 'mul'", () => {
    it("should mul correctly", () => {
        assert.strictEqual(mul(2, 3), 6);
    });
    it("should mul correctly", () => {
        assert.strictEqual(mul(2, 4), 8);
    });
});

describe("Demo describe 'div'", () => {
    it("should div correctly", () => {
        assert.strictEqual(div(2, 2), 1);
    });
});
