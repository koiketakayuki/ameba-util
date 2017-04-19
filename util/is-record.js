const Record = require('ameba-core').Types.Record;
const isObject = require('./is-object');

function isRecord(obj, type) {
  if (!isObject(obj)) {
    return false;
  }

  const propertyNames = Object.getOwnPropertyNames(obj);

  let result = Record.fields.every(f => propertyNames.includes(f.id));

  if (type) {
    result = (obj.type === type);
  }

  return result;
}

module.exports = isRecord;
