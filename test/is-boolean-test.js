const should = require('should');
const isBoolean = require('../index').isBoolean;

describe('isBoolean', function () {
  it('should return true when true given', function () {
    isBoolean(true).should.be.true();
  });

  it('should return true when false given', function () {
    isBoolean(false).should.be.true();
  });

  it('should return false when number given', function () {
    isBoolean(0).should.be.false();
  });

  it('should return false when string given', function () {
    isBoolean('test').should.be.false();
  });

  it('should return false when array given', function () {
    isBoolean([]).should.be.false();
  });

  it('should return false when object given', function () {
    isBoolean({}).should.be.false();
  });

  it('should return false when null given', function () {
    isBoolean(null).should.be.false();
  });

  it('should return false when undefined given', function () {
    isBoolean(undefined).should.be.false();
  });
});
