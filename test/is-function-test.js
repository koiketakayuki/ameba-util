const should = require('should');
const isFunction = require('../index').isFunction;

describe('isFunction', function () {
  it('should return false when true given', function () {
    isFunction(true).should.be.false();
  });

  it('should return false when false given', function () {
    isFunction(false).should.be.false();
  });

  it('should return false when number given', function () {
    isFunction(0).should.be.false();
  });

  it('should return false when string given', function () {
    isFunction('test').should.be.false();
  });

  it('should return false when array given', function () {
    isFunction([]).should.be.false();
  });

  it('should return false when object given', function () {
    isFunction({}).should.be.false();
  });

  it('should return false when null given', function () {
    isFunction(null).should.be.false();
  });

  it('should return false when undefined given', function () {
    isFunction(undefined).should.be.false();
  });

  it('should return true when function given', function () {
    isFunction(() => 1).should.be.true();
  });
});
