const should = require('should');
const isRecord = require('../util/is-record');
const CoreTypes = require('ameba-core').Types;
const CoreFields = require('ameba-core').Fields;

describe('isRecord', function () {
  it('should return false when boolean given', function () {
    isRecord(true).should.be.false();
  });

  it('should return false when number given', function () {
    isRecord(0).should.be.false();
  });

  it('should return false when string given', function () {
    isRecord('test').should.be.false();
  });

  it('should return false when array given', function () {
    isRecord([]).should.be.false();
  });

  it('should return false when object given', function () {
    isRecord({}).should.be.false();
  });

  it('should return false when null given', function () {
    isRecord(null).should.be.false();
  });

  it('should return false when undefined given', function () {
    isRecord(undefined).should.be.false();
  });

  it('should return true when core record types given', function () {
    Object.keys(CoreTypes).every(key => isRecord(CoreTypes[key])).should.be.true();
  });

  it('should return true when core fields given', function () {
    Object.keys(CoreFields).every(key => isRecord(CoreFields[key])).should.be.true();
  });
});
