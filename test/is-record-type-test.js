const should = require('should');
const isRecordType = require('../index').isRecordType;
const CoreTypes = require('ameba-core').Types;
const CoreFields = require('ameba-core').Fields;

describe('isRecordType', function () {
  it('should return false when boolean given', function () {
    isRecordType(true).should.be.false();
  });

  it('should return false when number given', function () {
    isRecordType(0).should.be.false();
  });

  it('should return false when string given', function () {
    isRecordType('test').should.be.false();
  });

  it('should return false when array given', function () {
    isRecordType([]).should.be.false();
  });

  it('should return false when object given', function () {
    isRecordType({}).should.be.false();
  });

  it('should return false when null given', function () {
    isRecordType(null).should.be.false();
  });

  it('should return false when undefined given', function () {
    isRecordType(undefined).should.be.false();
  });

  it('should return true when core record types given', function () {
    Object.keys(CoreTypes).every(key => isRecordType(CoreTypes[key])).should.be.true();
  });

  it('should return true when core fields given', function () {
    Object.keys(CoreFields).every(key => !isRecordType(CoreFields[key])).should.be.true();
  });
});
