var chai = require("chai");
var expect = chai.expect;

describe("Dummy test suit", function() {
  it("dummy test case ", function() {
    expect(true).to.be.true;
  });
});

// Root level hook
beforeEach(function() {
  console.log("------------ Root level hook in dummy.spec.js");
});
