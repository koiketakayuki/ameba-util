const Record = require('ameba-core').Types.Record;

function getRootType(recordType) {
  if (recordType.baseType.id === Record.id) {
    return recordType;
  }

  return getRootType(recordType.baseType);
}

module.exports = getRootType;
