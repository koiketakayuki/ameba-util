const should = require('should');
const isInstanceOf = require('../util/is-instance-of');
const CoreTypes = require('ameba-core').Types;
const CoreFields = require('ameba-core').Fields;

describe('isInstanceOf', function () {
  it('Each of core record types should be instance of RecordType', function () {
    Object.keys(CoreTypes).every(
      key => isInstanceOf(CoreTypes[key], CoreTypes.RecordType)).should.be.true();
  });

  it('Each of core record types should be instance of Trait', function () {
    Object.keys(CoreTypes).every(
      key => isInstanceOf(CoreTypes[key], CoreTypes.Trait)).should.be.true();
  });

  it('Each of core record types should be instance of Record', function () {
    Object.keys(CoreTypes).every(
      key => isInstanceOf(CoreTypes[key], CoreTypes.Record)).should.be.true();
  });

  it('Each of core fields should be instance of Field', function () {
    Object.keys(CoreFields).every(
      key => isInstanceOf(CoreFields[key], CoreTypes.Field)).should.be.true();
  });

  it('Each of core fields should be instance of Record', function () {
    Object.keys(CoreFields).every(
      key => isInstanceOf(CoreFields[key], CoreTypes.Record)).should.be.true();
  });

  it('Each of core fields should not be instance of Trait', function () {
    Object.keys(CoreFields).every(
      key => !isInstanceOf(CoreFields[key], CoreTypes.Trait)).should.be.true();
  });

  it('String should be instance of TextType', function () {
    isInstanceOf('test', CoreTypes.TextType).should.be.true();
  });

  it('True should be instance of BooleanType', function () {
    isInstanceOf(true, CoreTypes.BooleanType).should.be.true();
  });

  it('False should be instance of BooleanType', function () {
    isInstanceOf(false, CoreTypes.BooleanType).should.be.true();
  });

  it('Number should be instance of NumberType', function () {
    isInstanceOf(0, CoreTypes.NumberType).should.be.true();
  });
});
