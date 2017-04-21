const should = require('should');
const isObject = require('../util/is-object');

describe('isObject', function () {
  it('should return false when boolean given', function () {
    isObject(true).should.be.false();
  });

  it('should return false when number given', function () {
    isObject(0).should.be.false();
  });

  it('should return false when string given', function () {
    isObject('test').should.be.false();
  });

  it('should return false when array given', function () {
    isObject([]).should.be.false();
  });

  it('should return true when object given', function () {
    isObject({}).should.be.true();
  });

  it('should return false when null given', function () {
    isObject(null).should.be.false();
  });

  it('should return false when undefined given', function () {
    isObject(undefined).should.be.false();
  });
});
