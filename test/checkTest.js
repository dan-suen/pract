const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("checks", ()=> {
  it("returns true for same array", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("returns false for different arrays", () => {
    assert.isFalse(eqArrays([1, 6, 3], [1, 2, 3]));
  });

  it("returns false for different arrays lengths", () => {
    assert.isFalse(eqArrays([1, 2, 3, 4], [1, 2, 3]));
  });
});