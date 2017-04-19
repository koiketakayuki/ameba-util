const isRecord = require('./is-record');
const isRecordType = require('./is-record-type');

function isList(obj, type) {
  if (!isRecordType(type)) {
    throw new Error('');
  }

  if (!Array.isArray(obj)) {
    return false;
  }

  return obj.every(e => isRecord(e, type));
}

module.exports = isList;
