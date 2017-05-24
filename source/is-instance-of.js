const Types = require('ameba-core').Types;
const isBoolean = require('./is-boolean');
const isNumber = require('./is-number');
const isString = require('./is-string');
const isFunction = require('./is-function');

const Record = Types.Record;
const TextType = Types.TextType;
const BooleanType = Types.BooleanType;
const LongTextType = Types.LongTextType;
const RichTextType = Types.RichTextType;
const NumberType = Types.NumberType;
const IntType = Types.IntType;
const DateType = Types.DateType;
const TimeType = Types.TimeType;
const DateTimeType = Types.DateTimeType;
const FunctionType = Types.FunctionType;
const BinaryType = Types.BinaryType;
const EnumerationType = Types.EnumerationType;

function isInstanceOf(record, recordType) {
  if (recordType.id === BooleanType.id) {
    return isBoolean(record);
  }

  if (recordType.id === NumberType.id) {
    return isNumber(record);
  }

  if (recordType.id === IntType.id) {
    return Number.isInteger(record);
  }

  if (recordType.id === TextType.id || recordType.id === LongTextType.id ||
    recordType.id === RichTextType.id || recordType.id === EnumerationType.id) {
    return isString(record);
  }

  if (recordType.id === DateType.id || recordType.id === TimeType.id ||
    recordType.id === DateTimeType.id) {
    return record instanceof Date;
  }

  if (recordType.id === FunctionType.id) {
    return isFunction(record);
  }

  if (recordType.id === BinaryType.id) {
    return record instanceof Buffer;
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
