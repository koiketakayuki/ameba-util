const RecordType = require('ameba-core').Types.RecordType;
const isObject = require('./is-object');

function isRecordType(item) {
  if (!isObject(item)) {
    return false;
  }

  return RecordType.fields.every(f => f.id in item);
}

module.exports = isRecordType;
