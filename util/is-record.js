const Record = require('ameba-core').Types.Record;
const isObject = require('./is-object');

function isRecord(item) {
  if (!isObject(item)) {
    return false;
  }

  return Record.fields.every(f => f.id in item);
}

module.exports = isRecord;
