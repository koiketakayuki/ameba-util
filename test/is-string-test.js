const should = require('should');
const isString = require('../index').isString;

describe('isString', function () {
  it('should return false when boolean given', function () {
    isString(true).should.be.false();
  });

  it('should return false when number given', function () {
    isString(0).should.be.false();
  });

  it('should return true when string given', function () {
    isString('test').should.be.true();
  });

  it('should return false when array given', function () {
    isString([]).should.be.false();
  });

  it('should return false when object given', function () {
    isString({}).should.be.false();
  });

  it('should return false when null given', function () {
    isString(null).should.be.false();
  });

  it('should return false when undefined given', function () {
    isString(undefined).should.be.false();
  });
});
