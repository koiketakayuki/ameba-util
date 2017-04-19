const Record = require('ameba-core').Types.Record;
const isRecordType = require('./is-record-type');

function getRootType(type) {
  if (!isRecordType(type)) {
    throw new Error('record type is expected, but not given');
  }

  if (type === Record) {
    return Record;
  }

  if (type.baseType === Record) {
    return type;
  }

  return getRootType(type.baseType);
}

module.exports = getRootType;
