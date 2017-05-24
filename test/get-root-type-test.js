const should = require('should');
const getRootType = require('../index').getRootType;
const CoreTypes = require('ameba-core').Types;

describe('getRootType', function () {
  it('should return Record when Record given', function () {
    getRootType(CoreTypes.Record).should.have.property('id', CoreTypes.Record.id);
  });

  it('should return Trait when Trait given', function () {
    getRootType(CoreTypes.Trait).should.have.property('id', CoreTypes.Trait.id);
  });

  it('should return Trait when RecordType given', function () {
    getRootType(CoreTypes.RecordType).should.have.property('id', CoreTypes.Trait.id);
  });

  it('should return Field when Field given', function () {
    getRootType(CoreTypes.Field).should.have.property('id', CoreTypes.Field.id);
  });
});
