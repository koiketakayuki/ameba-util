const should = require('should');
const isNumber = require('../index').isNumber;

describe('isNumber', function () {
  it('should return false when boolean given', function () {
    isNumber(true).should.be.false();
  });

  it('should return true when number given', function () {
    isNumber(0).should.be.true();
  });

  it('should return false when string given', function () {
    isNumber('test').should.be.false();
  });

  it('should return false when array given', function () {
    isNumber([]).should.be.false();
  });

  it('should return false when object given', function () {
    isNumber({}).should.be.false();
  });

  it('should return false when null given', function () {
    isNumber(null).should.be.false();
  });

  it('should return false when undefined given', function () {
    isNumber(undefined).should.be.false();
  });
});
