var chai = require("chai");
var expect = chai.expect;

var YourClass = require("../src/yourClass.js");
var yourObj = new YourClass();

describe("Test suit ", function() {
  it("should return sum of the numbers", function() {
    expect(yourObj.addSubtract(1, 2, true)).to.equal(3);
  });
});
