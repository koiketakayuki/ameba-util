const CoreTypes = require('ameba-core').Types;
const isBoolean = require('./is-boolean');
const isNumber = require('./is-number');
const isString = require('./is-string');

const Record = CoreTypes.Record;
const BooleanType = CoreTypes.BooleanType;
const NumberType = CoreTypes.NumberType;
const TextType = CoreTypes.TextType;

function isInstanceOf(record, recordType) {
  if (recordType.id === BooleanType.id) {
    return isBoolean(record);
  }

  if (recordType.id === NumberType.id) {
    return isNumber(record);
  }

  if (recordType.id === TextType.id) {
    return isString(record);
  }

  let type = record.type;

  while (type.id !== recordType.id) {
    if (type.id === Record.id) {
      return false;
    }

    type = type.baseType;
  }

  return true;
}

module.exports = isInstanceOf;
